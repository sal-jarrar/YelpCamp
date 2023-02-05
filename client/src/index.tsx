import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Campgrounds from "./pages/Campgrounds";
import Login from "./pages/Login";
import Register from "./pages/Register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/campgrounds" element={<Campgrounds />} />
        <Route index path="/page/:pageNumber" element={<Campgrounds />} />
        <Route index path="/Login" element={<Login />} />
        <Route index path="/register" element={<Register />} />

        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
