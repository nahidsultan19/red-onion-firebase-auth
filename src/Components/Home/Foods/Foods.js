import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [selectItems, setSelectItems] = useState('');
    const [breakfast, setBreakFast] = useState([])
    const [lunch, setLunch] = useState([])
    const [dinner, setDinner] = useState([])
    // const [refecth, setRefecth] = useState(false);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    useEffect(() => {
        if (selectItems === 'lunch') {
            const filterItem = foods.filter(food => food.category === selectItems);
            console.log(filterItem);
            setLunch(filterItem);
        }
        else if (selectItems === 'breakfast') {
            const filterItem = foods.filter(food => food.category === selectItems);
            console.log(filterItem);
            setBreakFast(filterItem);
        }
        else if (selectItems === 'dinner') {
            const filterItem = foods.filter(food => food.category === selectItems);
            console.log(filterItem);
            setDinner(filterItem);
        }
    }, [selectItems])



    return (
        <div className='container my-4'>
            <div className='navigate-btn w-25 mx-auto'>
                <button onClick={() => setSelectItems('breakfast')} className='btn btn-link text-decoration-none text-black'>Breakfast</button>
                <button onClick={() => setSelectItems('lunch')} className='btn btn-link text-decoration-none text-black'>Lunch</button>
                <button onClick={() => setSelectItems('dinner')} className='btn btn-link text-decoration-none text-black'>Dinner</button>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
                {
                    selectItems === '' && foods.map(food => <Food key={food.id} food={food} ></Food>)
                }

                {
                    selectItems === 'breakfast' &&
                    breakfast.map(food => <Food key={food.id} food={food} ></Food>)

                }
                {
                    selectItems === 'lunch' &&
                    lunch.map(food => <Food key={food.id} food={food} ></Food>)
                }
                {
                    selectItems === 'dinner' &&
                    dinner.map(food => <Food key={food.id} food={food} ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;