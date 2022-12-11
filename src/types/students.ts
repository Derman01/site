import Student    from 'models/Student';
import { IState } from './Interface';

export interface Filter {
    category?: number;
}

export interface StudentState extends IState<Student> {
    filter: Filter
}

export enum StudentActionTypes {
    GET ='GET',
    GET_SUCCESS = 'GET_SUCCESS',
    GET_ERROR = 'GET_ERROR',
    SER_FILTER = 'SER_FILTER'
}

interface StudentActionGet {
    type: StudentActionTypes.GET;
}

interface StudentActionGetSuccess {
    type: StudentActionTypes.GET_SUCCESS;
    payload: Student[];
}

interface StudentActionGetError {
    type: StudentActionTypes.GET_ERROR;
    payload: string;
}

interface StudentActionSetFilter {
    type: StudentActionTypes.SER_FILTER,
    payload: Filter
}

export type StudentAction =
    StudentActionGet
    | StudentActionGetSuccess
    | StudentActionGetError
    | StudentActionSetFilter;
