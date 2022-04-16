import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    if (loading) {
        return <p>Loding...</p>
    }


    const handleCreateUser = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='container mt-4'>
            <div className=' mx-auto shadow p-3' style={{ width: '350px' }} >
                <h2 className='text-center text-primary fw-bold'>Sign Up</h2>
                <hr />
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary w-100" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='mt-2'>Already have an Account? <Link to='/login' className='text-decoration-none'>Login please</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;