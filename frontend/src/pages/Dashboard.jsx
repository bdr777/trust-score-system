
import { useEffect, useState } from "react";

import API from "../services/api";

import ReviewCard from "../components/ReviewCard";

import ReviewForm from "../components/ReviewForm";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  const fetchReviews = async () => {

    try {

      const res = await API.get(
        "/reviews/user"
      );

      setReviews(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {

    try {

      await API.delete(
        `/reviews/${id}`
      );

      fetchReviews();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2 style={{ color: "#fff" }}>Dashboard</h2>

      <ReviewForm
        fetchReviews={fetchReviews}
      />

      {
        reviews.map((review) => (

          <ReviewCard
            key={review._id}
            review={review}
            onDelete={deleteReview}
          />

        ))
      }

      <button onClick={logout} style={{ marginTop: "20px",backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", cursor: "pointer",marginBottom: "20px" }}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;