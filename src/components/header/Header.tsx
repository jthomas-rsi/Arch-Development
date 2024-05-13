import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ElevateOnScroll from "./parts/ElevationScroll";
import { default as CompanyLogo } from "../../assets/logo.svg";
import PageTabs from "./parts/PageTabs";

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
}));

const Header = () => {
  const styles = useStyles();

  return (
    <>
      <ElevateOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img src={CompanyLogo} className={styles.logo} alt="company logo" />
            <Tabs
              value={0}
              indicatorColor="primary"
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
