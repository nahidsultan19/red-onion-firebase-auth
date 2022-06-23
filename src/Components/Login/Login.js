import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Shared/Loading';
import { useEffect } from 'react';

const Login = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user1, loading, error,] = useSignInWithEmailAndPassword(auth);

    let errorElement;

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [from, navigate, user])

    if (loading) {
        return <Loading />
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);


    }

    return (
        <div className='container mt-4'>
            <div className=' mx-auto shadow p-3' style={{ width: '350px' }} >
                <h2 className='text-center text-primary fw-bold'>Login</h2>
                <hr />
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <p>Forget Password?<button className='btn btn-link text-decoration-none'>Reset Password</button> </p>
                    {errorElement}
                    <Button variant="primary w-100" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-2'>Need an Account? <Link to='/signup'>Create an Account</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;