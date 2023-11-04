import React from 'react';
import { useState } from 'react';
//useState imported to allow form functionality

/*
    i had to make this a function and not a class so that i could 
    declare the variables for use in the form submission
*/
export default function LoginForm() {
    //state variables set to useState('') in order to become controlled
    //initial values are empty strings, 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //returning what is to be displayed on component use
    return (
        <>
        <form className="col-auto border border-dark shadow-lg bg-secondary rounded-lg">
            <h3 className='text-light font-weight-light p-2' >Log In</h3>
            <div className="row">
                <div className="col">
                    <input className="form-control" name="inputUser" placeholder="Username" value={ username } onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="col">
                    <input className="form-control" name="inputPassword" placeholder="Password" value={ password } onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <button className='btn btn-dark m-2' type="submit">Submit</button>
        </form>
        </>
    )
}
