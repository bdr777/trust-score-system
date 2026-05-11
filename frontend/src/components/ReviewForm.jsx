import { useState } from "react";

import API from "../services/api";

function ReviewForm({ fetchReviews }) {

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/reviews", {
        content
      });

      setContent("");

      fetchReviews();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <textarea
        placeholder="Write review..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button type="submit" style={{ marginTop: "5px",width: "50%", backgroundColor: "#269a41", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>
        Add Review
      </button>

    </form>
  );
}

export default ReviewForm;