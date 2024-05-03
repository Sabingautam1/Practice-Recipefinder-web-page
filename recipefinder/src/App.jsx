import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meal from './Components/Meal';
import RecipeInfo from './Components/Recipeinfo';
import './Components/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/meal/:MealId" element={<RecipeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
