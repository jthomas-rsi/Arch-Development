import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ElevateOnScroll from "./parts/ElevationScroll";
import { default as CompanyLogo } from "../../assets/logo.svg";
// import PageTabs from "./parts/PageTabs";
import { ChangeEvent, useEffect, useState } from "react";

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent", // removes hove effect when clicking logo button in header
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    // ...theme.typography.tab, // will use once custom tab typography is implemented
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem", // utilize rem for responsive text sizing in responsive design
    minWidth: 10,
    marginLeft: "25px", // use pixels for fixed spacing
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    height: "45px",
    color: theme.palette.common.white,
  },
}));

const Header = () => {
  const styles = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    // set the active tab value based on the current page
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <>
      <ElevateOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              className={styles.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)} // resets active tab to home page
              disableRipple
            >
              <img
                src={CompanyLogo}
                className={styles.logo}
                alt="company logo"
              />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="page tabs"
              indicatorColor="primary" // set to primary and blends into header background color
              className={styles.tabContainer}
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                className={styles.tab}
                {...a11yProps(0)}
              />
              <Tab
                label="Services"
                component={Link}
                to="/services"
                className={styles.tab}
                {...a11yProps(1)}
              />
              <Tab
                label="The Revolution"
                component={Link}
                to="/revolution"
                className={styles.tab}
                {...a11yProps(2)}
              />
              <Tab
                label="About Us"
                component={Link}
                to="/about"
                className={styles.tab}
                {...a11yProps(3)}
              />
              <Tab
                label="Contact Us"
                component={Link}
                to="/contact"
                className={styles.tab}
                {...a11yProps(4)}
              />
              <Button
                className={styles.button}
                component={Link}
                to="/estimate"
                variant="contained"
                color="secondary"
              >
                Free Estimate
              </Button>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevateOnScroll>
      <Box // box acts as custom margin to prevent content from being hidden behind the app bar
        className={styles.toolbarMargin}
      />
    </>
  );
};

export default Header;
