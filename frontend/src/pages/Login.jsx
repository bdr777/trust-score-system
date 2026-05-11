import React from 'react'
import { useState } from 'react'
import API from '../services/API'

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await API.post("/auth/login", form);
        localStorage.setItem(
            "token",
            res.data.token
        );
        alert("Login successful")
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "0 auto", marginTop: "50px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", background: "#18243f" }}>
            <h2 style={{color:"white"}}>Login</h2>
            <input type="email" placeholder="Enter Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Enter Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#35b753", color: "#fff", border: "none", borderRadius: "5px" }}>Login</button>
        </form>
    )
}

export default Login