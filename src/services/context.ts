import { createContext } from 'react';
import { IContext } from '../interfaces/interface';


const Context = createContext<IContext>({
    usersList: [],
    favoriteList: [],
    searchRef: null,
    searchName: () => {},
    heartVisibility: false,
    dragToFavorite: false,
    favoriteWrapperDrop: () => {},
    favoriteDragStart: () => {}, 
    favoriteDragLeave: () => {}, 
    favoriteDragOver: () => {}, 
    favoriteDrop: () => {},
    removeFavorite: () => {},
    usersDragStart: () => {},
    usersDragEnd: () => {},
}); 

export default Context;
