import "../styles/Awareness.css";
import React, { useState } from "react";
import { Button, Card, Input, Select, SelectContent, SelectItem, SelectTrigger } from "react";
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
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Preorder Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input placeholder="Your Student ID" type="text" value={id} onChange={(e) => setID(e.target.value)} required />
        <Select value={lunch} onValueChange={setLunch}>
          <SelectTrigger>Select a Lunch Option</SelectTrigger>
          <SelectContent>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">Place Preorder</Button>
      </form>
    </Card>
  );
}

function Confirmation() {
  const location = useLocation();
  const state = location.state || {};

  return (
    <Card className="p-6 text-center">
      <h2 className="text-xl font-bold">Preorder Confirmed!</h2>
      <p>Thank you, {state.name || "Student"}, for preordering and reducing food waste!</p>
      <p>We will send updates to your school email if availability changes.</p>
      <Button onClick={() => location("/")} className="mt-4">Go Home</Button>
    </Card>
  );
}

export default Preorder()