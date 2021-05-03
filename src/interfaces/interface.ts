export interface IStatus {
    message: string,
    spinner?: boolean
}

export interface IContext {
    usersList: Array<IResultData>
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