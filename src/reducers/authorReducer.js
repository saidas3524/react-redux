import * as types from '../actions/actionTypes';

import initialState from './initialState';

export default function authorReducer(state = initialState.authors ,action){
    switch(action.type)
    {
        case types.LOAD_AUTHORS_SUCCESS:
            // state.push(action.course);
            // return state;
            // state is immutaable so we cant use above code
            return action.authors;
        
        default:
            return state;    
             
        
    }
}