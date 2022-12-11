import { StudentState, StudentAction, StudentActionTypes } from 'types/students';

const initialState: StudentState = {
    data: [],
    loading: false,
    error: null,
    filter: {}
}

export const studentReducer = (state = initialState, action: StudentAction): StudentState => {
    switch (action.type) {
        case StudentActionTypes.GET:
            return {
                ...state,
                error: null,
                loading: true
            };
        case StudentActionTypes.GET_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case StudentActionTypes.GET_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        case StudentActionTypes.SER_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default: return state;
    }
}