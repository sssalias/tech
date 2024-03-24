import { create } from 'zustand'

type State = {
    isAuth: boolean
    token: string | null
}

type Actions = {
    login: (token:string) => void
    logout: () => void
}

const useUserStore = create<State & Actions>((set) => ({
    isAuth: false,
    token: '',
    login: (token) => set(state => ({isAuth: true, token: token})),
    logout: () => set(state => ({isAuth: false}))
}))

export default useUserStore
