import { create } from 'zustand'

type State = {
    isAuth: boolean
}

type Actions = {
    login: () => void
    logout: () => void
}

const useUserStore = create<State & Actions>((set) => ({
    isAuth: false,
    login: () => set(state => ({isAuth: true})),
    logout: () => set(state => ({isAuth: false}))
}))

export default useUserStore
