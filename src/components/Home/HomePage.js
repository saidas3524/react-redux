import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render (){
        return (
            <div className="jumbotron">
                <h1>PluralSight Administration</h1>
                <p>some test some test some test some test some test some test some test some test some test some test some test some test</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
} 


export default HomePage;