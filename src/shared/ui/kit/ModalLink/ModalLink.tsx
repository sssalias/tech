import React from 'react'
import {Link, useLocation} from 'react-router-dom'

type ModalLinkProps = {
    path:string,
    children:any
}

const ModalLink = ({path, children}:ModalLinkProps) => {

    const location = useLocation()
    
    return (
        <Link to={path} state={{prevLocation: location}}>{children}</Link>
    )
}

export default ModalLink