import { useState, useEffect, useRef, DragEvent } from 'react';
import axios from '../services/axios';
import Context  from '../services/context';

import findDisabled from './Users/findDisabled';
import searchName from './Users/searchName';
import { IResultData } from '../interfaces/interface';
import { GlobalStyle } from '../styles/GlobalStyle';

import { Status } from './Status/Status';
import { Header } from '../Components/Header/Header';
import { Users } from '../Components/Users/Users';


const App = (): JSX.Element => {
    const searchRef = useRef<HTMLDivElement | null>(null);

    const [usersList, setUsersList] = useState<Array<IResultData>>([]);
    const [favoriteList, setFavoriteList] = useState<Array<IResultData>>([]);
    const [error, setError] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [heartVisibility, setHeartVisibility] = useState<boolean>(false);
    const [dragToFavorite, setDragToFavorite] = useState<boolean>(false);
    const [currentFavorite, setCurrentFavorite] = useState<IResultData | null>(null);
    const [currentUser, setCurrentUser] = useState<IResultData | null>(null);
    const [currentList, setCurrentList] = useState<Array<IResultData> | null>(null);


    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=500')
        .then(response => {
            if (response.data.length !== 0) {
                setLoaded(true);
                setUsersList(sorterData(response.data.results));
                findDisabled(searchRef);
            } else {
                setError(true);
            }
        })
        .catch((err) => (err.response || err.request) && setError(true));
    }, []); 


    const favoriteWrapperDrop = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();

        setDragToFavorite(false);
        setHeartVisibility(false);

        if (currentList) {
            setFavoriteList(prev => prev.concat(currentUser));
        
            setUsersList(prev => 
                prev.filter(item => item.registered.date !== currentUser.registered.date));
        }
    }

    const favoriteDragStart = (card: IResultData): void => {
        setCurrentFavorite(card);
        setCurrentList(null);
    }

    const favoriteDragLeave = (event: DragEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.remove('gray');
    }

    const favoriteDragOver = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.currentTarget.classList.add('gray');
    }

    const favoriteDrop = (event: DragEvent<HTMLDivElement>, card: IResultData): void => {
        event.preventDefault();
        event.currentTarget.classList.remove('gray');

        setDragToFavorite(false);
        setHeartVisibility(false);
        
        if (!currentList) {
            setFavoriteList(prev => 
                prev.map(item => {
                    return item.registered.date === card.registered.date ?
                        {...currentFavorite}
                    :
                    item.registered.date === currentFavorite.registered.date ?
                        {...card}
                    :
                        item;
            }))
        }
    }

    const removeFavorite = (card: IResultData): void => {
        setFavoriteList(prev => 
            prev.filter(item => item.registered.date !== card.registered.date));

        setUsersList(prev => prev.concat(card));
    }

    const sorterData = (data: IResultData[]): Array<IResultData> => {
        const sortData = data.sort((prev, next) => prev.registered.age - next.registered.age);
        return sortData;
    }


    const usersDragStart = (card: IResultData, list: Array<IResultData>): void => {
        setHeartVisibility(true);
        setDragToFavorite(true);

        setCurrentUser(card);
        setCurrentList(list);
    }

    const usersDragEnd = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();

        setDragToFavorite(false);
        setHeartVisibility(false);
    }

    const value = {
        usersList,
        favoriteList,
        searchRef, 
        searchName,
        heartVisibility,
        dragToFavorite,
        favoriteWrapperDrop,
        favoriteDragStart, 
        favoriteDragLeave, 
        favoriteDragOver, 
        favoriteDrop,
        removeFavorite,
        usersDragStart,
        usersDragEnd
    }


    if (error) {
        return (
            <>
            <GlobalStyle />
                <Header />
                <Status message="Не удалось подключиться к серверу" />
            </>
        )
    } 
    
    if (!loaded) {
        return (
            <>
            <GlobalStyle />
                <Header />
                <Status message="Загружаю..." spinner={true} />
            </>
        )
    } 

    return (
        <Context.Provider value={value}>
        <GlobalStyle />
            <Header />
            <Users />
        </Context.Provider>
    );
}

export default App;
