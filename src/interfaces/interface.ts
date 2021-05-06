import { DragEvent, FormEvent, RefObject } from "react";


export interface IContext {
    usersList: Array<IResultData>,
    searchRef: RefObject<HTMLDivElement>
    searchName: (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>) => void,
    heartVisibility: boolean,
    dragToFavorite: boolean,
    dragStartHandler: (event: DragEvent<HTMLDivElement>, card: IResultData) => void, 
    dragLeaveHandler: (event: DragEvent<HTMLDivElement>) => void, 
    dragEndHandler: (event: DragEvent<HTMLDivElement>) => void, 
    dragOverHandler: (event: DragEvent<HTMLDivElement>) => void, 
    dropHandler: (event: DragEvent<HTMLDivElement>, card: IResultData) => void
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


export interface IResultData {
    email: string,
    registered: Registered,
    name: Name,
    picture: Picture
}

interface Registered {
    age: number,
    date: string
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