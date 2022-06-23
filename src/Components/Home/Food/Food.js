import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Food.css';

const Food = ({ food }) => {
    const { name, img, description, price } = food;
    return (
        <div className="text-center">
            <div className="card h-100 p-2 border-0 rounded-4 align-items-center">
                <img src={img} className="card-img-top w-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-5">{name}</h5>
                    <p className="card-text">{description}</p>
                    <small>${price}</small>
                </div>
                <button className='btn btn-primary'>add to cart</button>
            </div>
        </div>
    );
};

export default Food;