import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core";

import animationData from "../../animations/landinganimation/data";

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
  return <Lottie options={defaultOptions} height={"100"} width={"100"} />;
};

export default LandingPage;
