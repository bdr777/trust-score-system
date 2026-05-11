function ReviewCard({ review, onDelete }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px"
      }}
    >

      <h4>{review.user?.name}</h4>

      <p>{review.content}</p>

      <span>
        {
          review.isFake
            ? "Fake ❌"
            : "Real ✅"
        }
      </span>

      <br />

      {
        onDelete && (
          <button
            onClick={() => onDelete(review._id)}
            style={{ marginTop: "10px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
          >
            Delete
          </button>
        )
      }

    </div>
  );
}

export default ReviewCard;