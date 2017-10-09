import * as types from './actionTypes';

import courseApi  from '../api/mockCourseApi';


export function createCourse(course){

    return {type:types.CREATE_COURSE ,course}
}


export function loadCoursesSucess(courses) {
    return {type:types.LOAD_COURSES_SUCCESS,courses}
}


export function updateCourseSuccess(savedCourse){
    return{type: types.UDPATE_COURSE_SUCCESS,savedCourse}
}
 

export function createCourseSuccess(savedCourse){
    return{type: types.CREATE_COURSE_SUCCESS,savedCourse}
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSucess(courses)); 
        }).catch(error => {
            throw(error);
        })
    }
}

export function saveCourse(course){
    return function(dispatch,getState){
        return courseApi.saveCourse(course).then(savedCourse =>{
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse)) ;
        }).catch(error =>{
            throw(error);
        });
    }
}