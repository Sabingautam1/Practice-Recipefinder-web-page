import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const MealItem = ({ data }) => {
    let navigate = useNavigate();

    const handleClick = (mealId) => {
        navigate(`/meal/${mealId}`);
    };

    return (
        <>
            {data ? (
                data.map(item => (
                    <div className="card" key={item.idMeal} onClick={() => handleClick(item.idMeal)}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                ))
            ) : (
                <div>Not Found</div>
            )}
        </>
    );
};

export default MealItem;
