import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-10 d-flex justify-content-center align-itens-center' style={{ minHeight: '100vh' }}>
            <Spinner animation="border" variant="secondary" className='mt-5' />
        </div>
    );
};

export default Loading;