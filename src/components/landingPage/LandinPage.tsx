import Lottie from "react-lottie";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

import animationData from "../../animations/landinganimation/data";
import ButtonArrow from "../buttonArrow/ButtonArrow";

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
  pageContainer: {
    marginTop: "5em",
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
}));

const LandingPage = () => {
  const styles = useStyles();

  const theme = useTheme();

  return (
    <Grid
      container
      id="landingPage-container"
      direction="column"
      style={{ height: "90vh" }}
      className={styles.pageContainer}
    >
      <Grid item>
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
    </Grid>
  );
};

export default LandingPage;
