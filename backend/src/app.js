const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const authRoutes=require("./routes/auth.routes");
const userRoutes=require("./routes/user.routes");
const reviewRoutes = require("./routes/review.routes");

const app=express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Welcome to the Trust Score API");
});

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/reviews", reviewRoutes);
module.exports=app;