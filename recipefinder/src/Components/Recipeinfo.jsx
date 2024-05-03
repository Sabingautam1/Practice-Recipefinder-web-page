import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';

const RecipeInfo = () => {
    const [item, setItem] = useState(null);
    const { MealId } = useParams();

    useEffect(() => {
        if (MealId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data.meals[0]);
                });
        }
    }, [MealId]);

    return (
        <>
            {/* Your recipe info rendering */}
        </>
    );
};

export default RecipeInfo;
