import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState }                         from 'store/reducers/index';

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;