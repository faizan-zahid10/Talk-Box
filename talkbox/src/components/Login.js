import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import Talk from './Talk.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert('Login successful!');
        } catch (error) {
            console.error('Login Error:', error.message);
            alert('Login Error, Try again');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 col-sm-7 col-xs-6">
                    <form className="p-4 border rounded bg-warning">
                        <img src={Talk} alt='sorry' className='w-25 rounded-circle mx-auto d-block'></img>
                        <div className="form-group mb-3">
                            <label htmlFor="InputEmail1" className="mb-1">Your Email Address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter registered email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="InputPassword1" className="mb-1">Your Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-success fw-bold p-2 w-25" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
