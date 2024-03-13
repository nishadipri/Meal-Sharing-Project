const express = require("express");
const router = express.Router();
const knex = require("../database");

//router.get("/", async (request, response) => {
//try {
// knex syntax for selecting things. Look up the documentation for knex for further info
// const titles = await knex("meals").select("title");
//response.json(titles);
//} catch (error) {
//throw error;
//}
//});

router.get("/", async (request, response) => {
  try {
    // const mealWithDescription = await knex("meal")
    //   .select(
    //     "meal.id",
    //     "meal.title",
    //     "meal.location",
    //     "meal.price",
    //     "Review.description"
    //   );

    const meals = await knex.raw(`
    select 
      meal.id, 
      meal.title, 
      meal.location, 
      meal.price,
      COUNT(review.id) as "numOfReviews",
      SUM(review.stars) / COUNT(review.id) as rating
from meal as meal
left join "Review" as review on meal.id = review.meal_id
GROUP BY meal.id
    `);

    console.log("meals", meals);

    response.json(meals.rows);
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const queryResults = await knex.raw(`
    SELECT 
      meal.id, 
      meal.title, 
      meal.location, 
      meal.price,
      meal.max_reservations,
      count("Reservation".id) as "totalReservations"
    FROM meal
    LEFT JOIN "Reservation" ON meal.id = "Reservation".meal_id
    WHERE meal.id = ${id}
    GROUP BY meal.id
    `);

    const meal = queryResults.rows[0];

    if (!meal) {
      return response.status(404).json({ error: "Meal not found" });
    }

    return response.status(200).json(meal);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
