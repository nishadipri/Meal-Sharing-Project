import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
function HomePage() {
  return (
    <div className="home-page">
      <nav>
        <ul
          className="nav-links"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "50px",
            padding: "0",
            color: "#085B96",
            margin: "0",
          }}
        >
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/meals">
              Meals
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact-info">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1
        style={{
          color: "#031F4B",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Meal Sharing
      </h1>
      <h3 style={{ color: "#085B96", textAlign: "center" }}>
        Explore a Variety of Mouthwatering Dishes
      </h3>

      <div
        className="routeComponentsWrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
      <footer>
        {/* add contact information */}
        <div
          className="contact-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Contact Us</h4>
          <p>Email: mealsharing@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, Copenhagen, Denmark</p>
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
