import { Grid, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/FooterAdornment.svg";
import { SetStateAction } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

interface FooterProps {
  tabValue: number;
  menuItemIndex: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
  setMenuItemIndex: React.Dispatch<SetStateAction<number>>;
}

const Footer = ({
  tabValue,
  menuItemIndex,
  setTabValue,
  setMenuItemIndex,
}: FooterProps) => {
  const styles = useStyles();

  const handleFooterClick = (tabValue: number, menuItemValue?: number) => {
    setTabValue(tabValue);
    if (menuItemValue) setMenuItemIndex(menuItemValue);
  };
  return (
    <footer className={styles.footer}>
      <Grid container justifyContent="center" className={styles.mainContainer}>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/"
              onClick={() => handleFooterClick(0)}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/services"
              onClick={() => handleFooterClick(1, 0)}
            >
              Services
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/customsoftware"
              onClick={() => handleFooterClick(1, 1)}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/mobileapps"
              onClick={() => handleFooterClick(1, 2)}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/websites"
              onClick={() => handleFooterClick(1, 3)}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/revolution"
              onClick={() => handleFooterClick(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/revolution"
              onClick={() => handleFooterClick(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/revolution"
              onClick={() => handleFooterClick(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/revolution "
              onClick={() => handleFooterClick(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/about"
              onClick={() => handleFooterClick(3)}
            >
              About Us
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/about"
              onClick={() => handleFooterClick(3)}
            >
              History
            </Grid>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/about"
              onClick={() => handleFooterClick(3)}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={styles.link}
              component={Link}
              to="/contact"
              onClick={() => handleFooterClick(4)}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={styles.adornment}
      />
    </footer>
  );
};

export default Footer;
