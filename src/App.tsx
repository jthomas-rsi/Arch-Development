import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import customTheme from "./theme/customTheme";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Web Sites</div>} />
          <Route path="/revolution" element={<div>Revolution</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
