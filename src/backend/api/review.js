const express = require("express");
const router = express.Router();
const knex = require("../database");

// POST Adds a new review to the database

router.post("/", async (request, response) => {
  const { title, stars, description, meal_id } = request.body;

  const newReview = {
    title,
    description,
    stars: Number(stars),
    meal_id,
    created_date: new Date(),
  };

  try {
    await knex("Review").insert(newReview);
    response.status(201).json("Review created successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error creating review" });
  }
});

module.exports = router;
