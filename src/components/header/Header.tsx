import { MouseEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ElevateOnScroll from "./parts/ElevationScroll";
import { default as CompanyLogo } from "../../assets/logo.svg";
import { ChangeEvent, useEffect, useState } from "react";
import updateSelectedHeaderItems from "./utilis/updateSelectedHeaderItems";
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
  menuItem: {
    // when tab settings added to customTheme object, add here
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem", // utilize rem for responsive text sizing in responsive design
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = () => {
  const styles = useStyles();
  const { breakpoints } = useTheme();
  const isMediumScreen = useMediaQuery(breakpoints.down("md"));

  const [value, setValue] = useState(0); // sets the active tab value
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // sets the anchor element for the menu
  const [open, setOpen] = useState(false);
  const [menuItemIndex, setMenuItemIndex] = useState(0);

  // changes the active tab value based on the current page
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // opens the menu when the button is clicked
  const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  // closes the menu when an item is clicked
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (i: number) => {
    setAnchorEl(null);
    setOpen(false);
    setMenuItemIndex(i);
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    updateSelectedHeaderItems(pathName, value, setValue, setMenuItemIndex);
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
            {!isMediumScreen && (
              <PageTabs
                {...{
                  anchorEl: anchorEl!,
                  menuItemIndex,
                  open,
                  value,
                  setValue,
                  handleChange,
                  handleClose,
                  handleOpen,
                  handleMenuItemClick,
                }}
              />
            )}
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
