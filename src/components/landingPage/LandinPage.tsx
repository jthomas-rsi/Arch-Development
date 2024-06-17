import Lottie from "react-lottie";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import ButtonArrow from "../buttonArrow/ButtonArrow";
import animationData from "../../animations/landinganimation/data";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

// default options for the Lottie animation
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    // ...theme.typography.estimate, // when estimate values added to customTheme object replace here
    marginLeft: "50px",
    marginRight: "40px",
    borderRadius: "50px",
    height: "45px",
    width: "145px",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    width: 145,
    marginTop: "1em",
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  pageContainer: {
    marginTop: "5em",
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("md")]: {
      padding: 25,
      marginTop: "2em",
    },
  },
}));

const LandingPage = () => {
  const styles = useStyles();

  const theme = useTheme();

  const { breakpoints } = useTheme();

  const isSmallScreen = useMediaQuery(breakpoints.down("sm"));

  return (
    <Grid
      container
      id="landingPage-container"
      direction="column"
      style={{ height: "100vh" }}
      className={styles.pageContainer}
    >
      <Grid item>
        {/* ----- HERO BLOCK ----- */}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={styles.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              id="button-container"
              container
              justifyContent="center"
              className={styles.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={styles.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={styles.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>

                  <ButtonArrow
                    width="15px"
                    height="15px"
                    fill={`${theme.palette.common.blue}`}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={styles.animation}>
            <Lottie options={defaultOptions} height={"100"} width={"100"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- CUSTOM SOFTWARE BLOCK ----- */}
        <Grid
          container
          direction="row"
          className={styles.servicesContainer}
          justifyContent={isSmallScreen ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: isSmallScreen ? 0 : "5em",
              textAlign: isSmallScreen ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={styles.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={styles.learnButton}>
              <span style={{ marginLeft: 10 }}>Learn More</span>
              <ButtonArrow
                width="15px"
                height="15px"
                fill={`${theme.palette.common.blue}`}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="custom software icon"
              className={styles.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- iOS/Android BLOCK ----- */}
        <Grid
          container
          direction="row"
          className={styles.servicesContainer}
          justifyContent={isSmallScreen ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: isSmallScreen ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {isSmallScreen ? null : <br />} with either mobile platform.
            </Typography>
            <Button variant="outlined" className={styles.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width="15px"
                height="15px"
                fill={`${theme.palette.common.blue}`}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: isSmallScreen ? 0 : "5em" }}>
            <img
              src={mobileAppsIcon}
              alt="mobile phone icon"
              className={styles.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- WEBSITES BLOCK ----- */}
        <Grid
          container
          direction="row"
          className={styles.servicesContainer}
          justifyContent={isSmallScreen ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: isSmallScreen ? 0 : "5em",
              textAlign: isSmallScreen ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={styles.learnButton}>
              <span style={{ marginLeft: 10 }}>Learn More</span>
              <ButtonArrow
                width="15px"
                height="15px"
                fill={`${theme.palette.common.blue}`}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={websitesIcon}
              alt="websites icon"
              className={styles.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
