import { useState, useEffect } from 'react';
import axios from '../services/axios';
import Context  from '../services/context';

import { IResultData } from '../interfaces/interface';
import { GlobalStyle } from '../styles/GlobalStyle';

import { Status } from './Status';
import { Header } from '../Components/Header/Header';
import { Users } from '../Components/Users/Users';


const App = (): JSX.Element => {
    const [usersList, setUsersList] = useState<Array<IResultData>>([]);
    const [error, setError] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=15')
        .then(response => {
            if (response.data.length !== 0) {
                setLoaded(true);
                setUsersList(response.data.results);
            } else {
                setError(true);
            }
        })
        .catch((err) => (err.response || err.request) && setError(true))
    }, []);
    

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
        <Context.Provider value={{ usersList }}>
        <GlobalStyle />
            <Header />
            <Users />
        </Context.Provider>
    );

}

export default App;
