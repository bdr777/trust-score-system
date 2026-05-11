import { useEffect, useState } from "react";

import API from "../services/api";

function Home() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    API.get("/reviews")
      .then((res) =>
        setReviews(res.data)
      );

  }, []);

  return (
    <div style={{ maxWidth: "600px", padding: "20px" }}>

      <h2 style={{ marginBottom: "20px", textAlign: "center" ,color: "#fff" , textDecoration: "underline" }}>All Reviews</h2>

      {
        reviews.map((review) => (

          <div key={review._id}>

            <h4>
              {review.user?.name}
            </h4>

            <p>
              {review.content}
            </p>

            <span>
              {
                review.isFake
                  ? "Fake ❌"
                  : "Real ✅"
              }
            </span>

            <hr />

          </div>
        ))
      }

    </div>
  );
}

export default Home;