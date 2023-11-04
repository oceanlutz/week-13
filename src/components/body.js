import React from 'react';
import Navbar from './navbar';
import LoginForm from './login-form';

export default class Body extends React.Component {
    //displaying both components in body component to be used in index.js render
    render() {
        return (
            <>
            <div className="row align-items-center min-vh-100 mw-100 justify-content-center bg-light">
                <Navbar />
                <LoginForm />
            </div>
            </>
        )
    }
}