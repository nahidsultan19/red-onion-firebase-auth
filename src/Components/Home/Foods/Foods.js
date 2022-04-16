import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [selectItems, setSelectItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleBreakFast = () => {
        const breakfast = foods.filter(food => food.category === 'breakfast');
        console.log(breakfast);
        setSelectItems(breakfast)
    }
    const handleLunch = () => {
        const lunch = foods.filter(food => food.category === 'lunch');
        console.log(lunch);
        setSelectItems(lunch)
    }
    const handleDinner = () => {
        const dinner = foods.filter(food => food.category === 'dinner');
        console.log(dinner);
        setSelectItems(dinner)
    }

    return (
        <div className='container my-4'>
            <div className='navigate-btn w-25 mx-auto'>
                <button onClick={handleBreakFast} className='btn btn-link text-decoration-none text-black'>Breakfast</button>
                <button onClick={handleLunch} className='btn btn-link text-decoration-none text-black'>Lunch</button>
                <button onClick={handleDinner} className='btn btn-link text-decoration-none text-black'>Dinner</button>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;