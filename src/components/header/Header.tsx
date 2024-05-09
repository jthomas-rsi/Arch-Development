import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import ElevateOnScroll from "./parts/ElevationScroll";

const Header = () => {
  return (
    <ElevateOnScroll>
      <AppBar>
        <Toolbar>Arch Development</Toolbar>
      </AppBar>
    </ElevateOnScroll>
  );
};

export default Header;
