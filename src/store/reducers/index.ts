import { combineReducers } from 'redux';
import { studentReducer }  from './studentReducer';

export const rootReducer = combineReducers({
    student: studentReducer
});

export type RootState = ReturnType<typeof rootReducer>;