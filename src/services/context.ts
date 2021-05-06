import { createContext } from 'react';
import { IContext } from '../interfaces/interface';


const Context = createContext<IContext>({
    usersList: [],
    searchRef: null,
    searchName: (event, searchRef) => {},
    heartVisibility: false,
    dragToFavorite: false,
    dragStartHandler: (event, card) => {}, 
    dragLeaveHandler: (event) => {}, 
    dragEndHandler: (event) => {}, 
    dragOverHandler: (event) => {}, 
    dropHandler: (event, card) => {}
}); 

export default Context;
