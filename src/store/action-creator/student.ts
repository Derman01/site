import { Filter, StudentAction, StudentActionTypes } from 'types/students';
import { Dispatch }                                  from 'redux';
import Student, { IStudent }                 from 'models/Student';
import axios from 'axios';


export const getStudents = (filter?: Filter) => {
    return async (dispatch: Dispatch<StudentAction>) => {
        try {
            dispatch({type: StudentActionTypes.GET});
            const studentsData = await axios.get('https://ambiguous-beryl-era.glitch.me/students', {
                params: {
                    filter
                }
            });
            const students = studentsData.data.map((student: IStudent) => new Student(student));
            dispatch({
                type: StudentActionTypes.GET_SUCCESS,
                payload: students})
        } catch (e) {
            dispatch({type: StudentActionTypes.GET_ERROR, payload: 'Произошла ошибка'})
        }
    }
}

export const setFilter = (filter: Filter): StudentAction  => {
    return {type: StudentActionTypes.SER_FILTER, payload: filter};
}