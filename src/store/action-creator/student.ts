import { Filter, StudentAction, StudentActionTypes } from 'types/students';
import { Dispatch }                                  from 'redux';
import Student, { IStudent }                         from 'models/Student';
import axios from 'axios';

const createServer = async (path: string, params: Object) => {
    return await axios.get(`http://autoschool.local:666/api/${path}`, {
        params
    });
}


export const getStudents = (filter?: Filter) => {
    return async (dispatch: Dispatch<StudentAction>) => {
        try {
            dispatch({type: StudentActionTypes.GET});
            const studentsData = await createServer('students', {
                filter
            });
            const students = studentsData.data.map((student: IStudent) => new Student(student));
            dispatch({
                type: StudentActionTypes.GET_SUCCESS,
                payload: students
            });
        } catch (e) {
            dispatch({type: StudentActionTypes.GET_ERROR, payload: 'Произошла ошибка'})
        }
    }
}

export const setFilter = (filter: Filter): StudentAction  => {
    return {type: StudentActionTypes.SER_FILTER, payload: filter};
}