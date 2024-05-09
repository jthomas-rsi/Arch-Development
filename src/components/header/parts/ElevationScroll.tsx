import { useScrollTrigger } from "@material-ui/core";
import { cloneElement } from "react";

interface ElevateOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevateOnScroll = (props: ElevateOnScrollProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevateOnScroll;
