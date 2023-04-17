import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import NotFound from "../Pages/NotFound";
import Unauthorized from "../Pages/Unauthorized";
import UsersCreate from "../Pages/Users/Create";
import UsersVisualize from "../Pages/Users/Visualize";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/main" element={<Main />} />
        <Route path="/users" element={<UsersVisualize />} />
        <Route path="/users/create" element={<UsersCreate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
