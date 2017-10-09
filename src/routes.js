import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CoursePage from "./components/course/CoursePage";
import ManageCoursePage  from "./components/course/ManageCourse";


export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="about" component={AboutPage}></Route>
        <Route path="courses" component={CoursePage}></Route>
        <Route path="course" component={ManageCoursePage}></Route>
        <Route path="course/:id" component={ManageCoursePage}></Route>
    </Route>
);
