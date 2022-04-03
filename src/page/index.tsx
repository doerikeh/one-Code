import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";
import Users from "./Users";

export default function Pages() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/post/:id" element={<Posts />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </div>
  );
}
