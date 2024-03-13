import "./MealList.css";
import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function MealList() {
  const [meals, setMeals] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/meals");
      const data = await response.json();
      setMeals(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const RenderMeals = () => {
    let mealsToRender;

    if (location.pathname === "/") {
      mealsToRender = meals.slice(0, 3);
    } else if (location.pathname.indexOf("/meals") !== -1) {
      mealsToRender = meals;
    }

    return mealsToRender.map((meal) => {
      const linkToBookingPage = `/meals/${meal.id}`;

      return (
        <Col key={meal.id} style={{ alignItems: "center" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Body style={{ backgroundColor: "#BDC1D1" }}>
              <div>
                <Meal meal={meal} />
                <button
                  style={{
                    backgroundColor: "#085B96",
                    borderRadius: "10px",
                    padding: "10px",
                    alignContent: "center",
                    margin: "18px 40px",
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      padding: "10px",
                      textDecoration: "none",
                    }}
                    to={linkToBookingPage}
                  >
                    Make a booking
                  </Link>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <Container fluid style={{}}>
      <Row>
        <RenderMeals />
      </Row>
      <button
        style={{
          backgroundColor: "#085B96",
          borderRadius: "10px",
          padding: "10px",
          margin: "18px 40px",
        }}
      >
        <Link
          style={{ color: "white", padding: "10px", textDecoration: "none" }}
          to="/meals"
        >
          View All
        </Link>
      </button>
    </Container>
  );
}

export default MealList;
