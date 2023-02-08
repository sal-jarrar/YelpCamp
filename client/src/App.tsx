import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Campgrounds from "./pages/Campgrounds";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Campground from "./pages/Campground";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

const App = (
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/campgrounds" element={<Campgrounds />} />
          <Route index path="/campground/:campId" element={<Campground />} />
          <Route index path="/page/:pageNumber" element={<Campgrounds />} />
          <Route index path="/Login" element={<Login />} />
          <Route index path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);

export default App;
