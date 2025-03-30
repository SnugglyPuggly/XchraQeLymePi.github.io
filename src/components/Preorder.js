import "../styles/Preorder.css";
import React, { useState } from "react";
import { Button, Card, Input } from "@mui/material"; // Replace with the actual library providing these components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"; // Replace with the actual library providing these components
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Preorder() {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [lunch, setLunch] = useState("chicken");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name, id, lunch } });
  };

  return (
    <Card className="preorder-tab">
      <h2>Preorder Form</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input placeholder="Your Student ID" type="text" value={id} onChange={(e) => setID(e.target.value)} required />
        <Select onValueChange={(value) => setLunch(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your lunch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="dropbtn">Place Preorder</Button>
      </form>
    </Card>
  );
}

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  return (
    <Card className="preorder-tab h2">
      <h2>Preorder Confirmed!</h2>
      <p>Thank you, {state.name || "Student"}, for preordering and reducing food waste!</p>
      <Button onClick={() => navigate("/")} className="dropbtn">Go Home</Button>
    </Card>
  );
}

export default Preorder;