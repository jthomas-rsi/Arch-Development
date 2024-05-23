import Lottie from "react-lottie";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
  return (
    <Grid
      container
      id="landingPage-container"
      direction="column"
      style={{ height: "90vh" }}
    >
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h2">
              Bringing West Coast Technology <br /> to the Midwest
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    Learn More
                    <ButtonArrow width="15px" height="15px" fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={"100"} width={"100"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
