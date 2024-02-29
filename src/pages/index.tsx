import IndexPage from "./IndexPage";
import {ReactElement} from "react";

export interface IPath {
    path:string,
    element:ReactElement
}

export const paths:[IPath] = [
    {path: '/', element: <IndexPage/>}
]