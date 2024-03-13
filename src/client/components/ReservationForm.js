import React, { useState, useEffect } from "react";

function ReservationForm({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact_name: name,
          contact_email: email,
          contact_phonenumber: phoneNumber,
          number_of_guests: 4,
          meal_id: id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        style={{
          backgroundColor: "#085B96",
          borderRadius: "10px",
          padding: "10px",
          margin: "18px 40px",
        }}
        type="submit"
      >
        Reserve
      </button>
    </form>
  );
}

export default ReservationForm;
