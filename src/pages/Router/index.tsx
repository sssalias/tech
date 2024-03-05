import {IndexPage} from "pages";
import {ReactElement} from "react";

// Массив всех маршрутов, и соответсвующих им элементам

export interface IRoute {
    path:string,
    element:ReactElement
}

export const routes:[IRoute] = [
    {path: '/', element: <IndexPage/>}
]

