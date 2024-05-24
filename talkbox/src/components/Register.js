import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import firebase from '../firebase/firebase';
import Talk from './Talk.png';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Registration Error:', error.message);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 col-sm-7 col-xs-6">
                    <form className="p-4 border rounded bg-info justify-content-center align-items-center">
                        <img src={Talk} alt='sorry' className='w-25 rounded-circle mx-auto d-block'></img>
                        <div className="form-group mb-3">
                            <label htmlFor="inputEmail" className="mb-1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="inputPassword" className="mb-1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button
                                type="submit"
                                className="btn btn-primary fw-bold p-2 w-25"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
