import { useState } from "react";
import { ThemeProvider, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import customTheme from "./theme/customTheme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landingPage/LandinPage";

function App() {
  const [tabValue, setTabValue] = useState(0); // sets the active tab value
  const [menuItemIndex, setMenuItemIndex] = useState(0);

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Header
          {...{ tabValue, menuItemIndex, setTabValue, setMenuItemIndex }}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/services"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Services</Typography>
              </div>
            }
          />
          <Route
            path="/customsoftware"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Custom Software</Typography>
              </div>
            }
          />
          <Route
            path="/mobileapps"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Mobile Apps</Typography>
              </div>
            }
          />
          <Route
            path="/websites"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Web Sites</Typography>
              </div>
            }
          />
          <Route
            path="/revolution"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Revolution</Typography>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">About Us</Typography>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Contact Us</Typography>
              </div>
            }
          />
          <Route
            path="/estimate"
            element={
              <div style={{ height: "90vh" }}>
                <Typography variant="h1">Estimate</Typography>
              </div>
            }
          />
        </Routes>
        <Footer {...{ setTabValue, setMenuItemIndex }} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
