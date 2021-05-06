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
    const [error, setError] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [heartVisibility, setHeartVisibility] = useState<boolean>(false);
    const [dragToFavorite, setDragToFavorite] = useState<boolean>(false);


    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=50')
        .then(response => {
            if (response.data.length !== 0) {
                setLoaded(true);
                setUsersList(sortData(response.data.results));
                findDisabled(searchRef);
            } else {
                setError(true);
            }
        })
        .catch((err) => (err.response || err.request) && setError(true));
    }, []); 


    const sortData = (data: IResultData[]): Array<IResultData> => {
        const sortData = data.sort((prev, next) => prev.registered.age - next.registered.age);
        return sortData;
    }


    const dragStartHandler = (event: DragEvent<HTMLDivElement>, card: IResultData) => {
        setDragToFavorite(true);
        setHeartVisibility(true);
    }

    const dragLeaveHandler = (event: DragEvent<HTMLDivElement>) => {
        
    }

    const dragEndHandler = (event: DragEvent<HTMLDivElement>) => {
        setDragToFavorite(false);
        setHeartVisibility(false);
    }

    const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const dropHandler = (event: DragEvent<HTMLDivElement>, card: IResultData) => {
        event.preventDefault();
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
        <Context.Provider value={{ 
            usersList, 
            searchRef, 
            searchName,
            heartVisibility,
            dragToFavorite,
            dragStartHandler, 
            dragLeaveHandler, 
            dragEndHandler, 
            dragOverHandler, 
            dropHandler
        }}>
        <GlobalStyle />
            <Header />
            <Users />
        </Context.Provider>
    );
}

export default App;
