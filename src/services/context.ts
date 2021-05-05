import { FormEvent, RefObject } from 'react';
import { createContext } from 'react';
import { IContext } from '../interfaces/interface';


const Context = createContext<IContext>({
    usersList: [],
    searchRef: null,
    searchName: (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>) => {}
}); 

export default Context;
