import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center w-100  my-2'>
                    <span className='px-2'> Google Sign In</span>
                </button>
                {/* <button className='btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center w-100 my-2'>
                    <span className='px-2'> Facebook Sign In</span>
                </button> */}
                <button className='btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center w-100'>
                    <span className='px-2'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;