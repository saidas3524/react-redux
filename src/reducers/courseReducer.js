import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses,action){
    switch(action.type)
    {
        case types.LOAD_COURSES_SUCCESS:
            // state.push(action.course);
            // return state;
            // state is immutaable so we cant use above code
            return action.courses;
        
        default:
            return state;    
             
        
    }
}