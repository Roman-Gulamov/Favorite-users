import { DragEvent, FormEvent, RefObject } from "react";


export interface IContext {
    usersList: Array<IResultData>,
    favoriteList: Array<IResultData>,
    searchRef: RefObject<HTMLDivElement>
    searchName: (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>) => void,
    heartVisibility: boolean,
    dragToFavorite: boolean,
    favoriteWrapperDrop: (event: DragEvent<HTMLDivElement>) => void,
    favoriteDragStart: (card: IResultData) => void, 
    favoriteDragLeave: (event: DragEvent<HTMLDivElement>) => void, 
    favoriteDragOver: (event: DragEvent<HTMLDivElement>) => void, 
    favoriteDrop: (event: DragEvent<HTMLDivElement>, card: IResultData) => void,
    removeFavorite: (card: IResultData) => void,
    usersDragStart: (card: IResultData, list: Array<IResultData>) => void,
    usersDragEnd: (event: DragEvent<HTMLDivElement>) => void
}

export interface IStatus {
    message: string,
    spinner?: boolean
}


export interface ICardsData extends ICardsProps {
    eventKey: string,
    title: string
}

export interface ICardsProps {
    min: number,
    max: number
}

export interface ICardData {
    card: IResultData
}

export interface IResultData {
    email: string,
    registered: Registered,
    name: Name,
    picture: Picture
}

interface Registered {
    age?: number,
    date?: string
}

interface Name {
    first: string,
    last: string
}

interface Picture {
    medium: string
}

export interface IDragToFavorite {
    dragToFavorite: boolean
}

export interface IHeartVisibility {
    heartVisibility: boolean
}