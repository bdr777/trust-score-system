import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "20px 40px",

        background: "rgba(255,255,255,0.1)",

        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)"
        
      }}
    >

      <h2 style={{ color: "#fff" }}>TrustScore</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",

         }}
      >

        <Link to="/">Home</Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </div>
  );
}

export default Navbar;