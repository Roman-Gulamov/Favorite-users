import { createContext } from 'react';
import { IContext } from '../interfaces/interface';


const Context = createContext<IContext>({
    usersList: []
}); 

export default Context;