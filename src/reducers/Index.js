import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducere from './SelectionReducer';

export default combineReducers({ 
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducere   
});

