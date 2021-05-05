import { FormEvent, RefObject } from "react";


export interface IStatus {
    message: string,
    spinner?: boolean
}

export interface IContext {
    usersList: Array<IResultData>,
    searchRef: RefObject<HTMLDivElement>,
    searchName: (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>) => void
}

export interface ICardsData extends ICardsProps {
    eventKey: string,
    title: string,
    disabled: boolean
}

export interface ICardsProps {
    min: number,
    max: number
}

export interface IDisabled {
    disabled: boolean
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