import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions.js';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);

        // this.state = {
        //     course:{title:""}
        // };

        // this.onTitleChanged = this.onTitleChanged.bind(this);
        // this.onCLickSave = this.onCLickSave.bind(this);

    }

    // onTitleChanged(event){
    //      const course = this.state.course;
    //      course.title = event.target.value;
    //      this.setState({course:course});
    // }

    // onCLickSave(event){
    //     this.props.actions.createCourse(this.state.course);
    // }

    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
               <CourseList courses={this.props.courses}></CourseList>
            </div>
        );
    }
}


CoursePage.propTypes = {
    
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
};


function mapStateToProps(state,ownProps){

    return {
        courses: state.courses
    };

}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(courseActions,dispatch)
    };
}  

// const variabletemp = connect(mapStateToProps,mapDispatchToProps);
// export default variabletemp(CoursePage);
// alternatively we can use the above code


export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);