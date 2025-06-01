import React, { useState, useEffect, FormEvent } from "react";
import './RatingReviews.css';

interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface FormData {
  user: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  state: string;
}

const RatingReviews: React.FC<ReviewsProps> = ({ state }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState<FormData>({
    user: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/getreviews?state=${encodeURIComponent(state)}`);
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText);
        }
        const data = await res.json();
        setReviews(data.reviews);
      } catch (err) {
        console.error("Fetch reviews error:", err);
      }
    };

    fetchReviews();
  }, [state]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/postreviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, state }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Failed to submit review:", errorText);
        return;
      }

      const data = await res.json();
      setReviews((prev) => [...prev, data.review]);
      setForm({ user: "", rating: 5, comment: "" });
    } catch (error) {
      console.error("Submit review error:", error);
    }
  };

  return (
    <>
    <div className="review-container">
      <h3> Add Reviews for {state} visit</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.user}
          onChange={(e) => setForm({ ...form, user: e.target.value })}
          required
        />

        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your review..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
        />

        <button type="submit">Submit Review</button>
      </form>
      </div>
      
        <h2>Review</h2>
        <ul>
  {reviews.length === 0 ? (
    <li>No reviews yet.</li>
  ) : (
   
    reviews.map((r, i) => (
        <div className="showReviews">
      <li key={i}>
        <strong style={{ color: "black" }}>{r.user}</strong> rated: {r.rating} / 5 <br />
        <em>{r.comment}</em>
        <br />
        <small>{new Date(r.date).toLocaleString()}</small>
      </li>
      </div>
    ))
  )}
  
</ul>
      
      </>
  );
};

export default RatingReviews;
