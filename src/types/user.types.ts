export interface IUser {
    id: number,
    name: string,
}

export interface IInitialUserState {
    user: IUser,
    error: string | null,
    isLoading: boolean,
}