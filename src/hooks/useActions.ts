import { useDispatch }        from 'react-redux';
import { bindActionCreators } from 'redux';
import {default as ActionCreators} from 'store/action-creator/index';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}