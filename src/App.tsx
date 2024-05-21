import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import customTheme from "./theme/customTheme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<div style={{ height: "100vh" }}>Home</div>}
          />
          <Route
            path="/services"
            element={<div style={{ height: "100vh" }}>Services</div>}
          />
          <Route
            path="/customsoftware"
            element={<div style={{ height: "100vh" }}>Custom Software</div>}
          />
          <Route
            path="/mobileapps"
            element={<div style={{ height: "100vh" }}>Mobile Apps</div>}
          />
          <Route
            path="/websites"
            element={<div style={{ height: "100vh" }}>Web Sites</div>}
          />
          <Route
            path="/revolution"
            element={<div style={{ height: "100vh" }}>Revolution</div>}
          />
          <Route
            path="/about"
            element={<div style={{ height: "100vh" }}>About Us</div>}
          />
          <Route
            path="/contact"
            element={<div style={{ height: "100vh" }}>Contact Us</div>}
          />
          <Route
            path="/estimate"
            element={<div style={{ height: "100vh" }}>Estimate</div>}
          />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
