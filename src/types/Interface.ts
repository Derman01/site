export interface IState<T> {
    data: T[];
    loading: boolean;
    error: null | string;
}