import React from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import ReviewForm from "./ReviewForm";
import "./MealDetails.css";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/meals/${id}`);
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="meal-details">
      <h3>Meal details</h3>
      {meal ? (
        <div>
          <h4>{meal.title}</h4>
          <p>{meal.description}</p>
          <p>Price: {meal.price}</p>
          <p>Location: {meal.location}</p>
          {meal.totalReservations < meal.max_reservations && (
            <ReservationForm id={id} />
          )}
          {meal.totalReservations >= meal.max_reservations && (
            <p>This meal is fully booked</p>
          )}
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
      <h3>Add a review</h3>
      <ReviewForm id={id} />
    </div>
  );
}

export default MealDetails;
