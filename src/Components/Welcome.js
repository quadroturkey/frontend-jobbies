import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to my Job Application Tracker</h1><br/>

                <Link to="/login">Login</Link><br/><br/>
                <Link to="/signup">SignUp</Link>

                {/* <a href="/signup">SignUp</a><br/><br/>
                <a href="/login">Login</a> */}
            </div>
        );
    }
}

export default Welcome;