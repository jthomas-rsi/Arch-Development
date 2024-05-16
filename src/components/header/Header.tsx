import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ElevateOnScroll from "./parts/ElevationScroll";
import { default as CompanyLogo } from "../../assets/logo.svg";
import PageTabs from "./parts/PageTabs";
import { ChangeEvent, useState } from "react";

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
    height: "7em",
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

  return (
    <>
      <ElevateOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img src={CompanyLogo} className={styles.logo} alt="company logo" />
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="page tabs"
              indicatorColor="primary" // set to primary and blends into header background color
              className={styles.tabContainer}
            >
              <Tab label="Home" className={styles.tab} {...a11yProps(0)} />
              <Tab label="Services" className={styles.tab} {...a11yProps(1)} />
              <Tab
                label="The Revolution"
                className={styles.tab}
                {...a11yProps(2)}
              />
              <Tab label="About Us" className={styles.tab} {...a11yProps(3)} />
              <Tab
                label="Contact Us"
                className={styles.tab}
                {...a11yProps(4)}
              />
              <Button
                className={styles.button}
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
