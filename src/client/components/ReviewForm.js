import React, { useState, useEffect } from "react";
import "./ReviewForm.css";
function ReviewForm({ id }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const Button = ({ number }) => {
    return (
      <button
        className="rating-button"
        style={{
          height: "50px",
          width: "50px",
          padding: "5px 10px",
          borderRadius: "50%",
        }}
        onClick={() => setRating(number)}
      >
        {number}
      </button>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:4000/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          stars: rating,
          description: comment,
          meal_id: id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTitle("");
          setRating("");
          setComment("");

          alert("Review submitted successfully");
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
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Rating:</label>
        <ul
          className="grid grid-cols-5 gap-4 0 mb-12"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li>
            <Button number={1} />
          </li>
          <br />
          <li>
            <Button number={2} />
          </li>
          <br />
          <li>
            <Button number={3} />
          </li>
          <br />
          <li>
            <Button number={4} />
          </li>
          <br />
          <li>
            <Button number={5} />
          </li>
        </ul>
      </div>
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={200}
          rows={5}
          cols={50}
          placeholder="Add a comment...."
        >
          Comment:
        </textarea>
      </div>

      <button
        style={{
          backgroundColor: "#085B96",
          borderRadius: "10px",
          padding: "10px",
          margin: "18px 40px",
        }}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
