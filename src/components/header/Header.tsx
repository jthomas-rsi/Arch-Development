import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ElevateOnScroll from "./parts/ElevationScroll";
import { default as CompanyLogo } from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <ElevateOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img
              src={CompanyLogo}
              className={classes.logo}
              alt="company logo"
            />
          </Toolbar>
        </AppBar>
      </ElevateOnScroll>
      <Box // box acts as custom margin to prevent content from being hidden behind the app bar
        className={classes.toolbarMargin}
      />
    </>
  );
};

export default Header;
