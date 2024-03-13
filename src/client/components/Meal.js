

import React from 'react';
import "./Meal.css";

const Meal = ({ meal }) => {
  return (
    <div className="meal-card">
      <h3>{meal.title}</h3>
      <p>Description: {meal.description}</p>
      <p>Price: ${meal.price}</p>
      <p>Location: {meal.location}</p>
      <p>Reviews: {meal.numOfReviews}</p>
      <p>Rating: {meal.rating ? Number(meal.rating) : 0}</p>
    </div>
  );
};

export default Meal;