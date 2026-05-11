import React from 'react'
import { useState } from 'react'
import API from '../services/API'

const Register = () => {
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        API.post("/auth/register",form);
        alert("Registration successful")
    }
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "0 auto", marginTop: "50px", padding: "20px", border: "1px solid #ccc",color: "#fff", borderRadius: "5px", background: "#18243f" }}>
        <h2 style={{ color: "#fff" }}>Register</h2>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input type="email" placeholder="Enter Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Enter Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#269a41", color: "#fff", border: "none", borderRadius: "5px" }}>Register</button>
    </form>
  )
}

export default Register