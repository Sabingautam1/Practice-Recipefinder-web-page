import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import Recipeindex from "./Recipeindex";
import './style.css';

const Meal = () => {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState(null);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals);
                setShow(true);
            });
    }, [url]);

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    };

    const searchRecipe = (evt) => {
        if (evt.key === "Enter") {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        }
    };

    return (
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>All the food recipes available here. Search for your recipe</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyUpCapture={searchRecipe} />
            </div>
            <div className="container">
                {show ? <MealItem data={item} /> : <div>Not Found</div>}
            </div>
            <div className="indexContainer">
                <Recipeindex alphaIndex={(alpha) => setIndex(alpha)} />
            </div>
        </div>
    );
};

export default Meal;
