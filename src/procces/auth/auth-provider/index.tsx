import {useEffect, useState} from 'react'
import useUserStore from 'store/user/useUserStore'
import {useKeycloak} from '@react-keycloak/web'

const AuthProvider = ({children}:any) => {
    const {initialized, keycloak} = useKeycloak()

    const login = useUserStore(state => state.login)

    useEffect(() => {
            if (keycloak.token && initialized) {
                console.log(keycloak.token)
                login(keycloak.token)
            }
        },
        [initialized])

    return (
        <>
            {children}
        </>
    )
}

export default AuthProvider