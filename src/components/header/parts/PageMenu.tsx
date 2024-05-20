import { Dispatch, SetStateAction } from "react";
import { isIOS } from "react-device-detect";

import { IconButton, SwipeableDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  menuIcon: {
    width: "50px",
    height: "50px",
  },
  menuIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent", // removes hove effect when clicking menu icon button in header
    },
  },
}));

interface PagesMenuProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const PagesMenu = ({ openDrawer, setOpenDrawer }: PagesMenuProps) => {
  const styles = useStyles();

  return (
    <>
      <IconButton
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
        className={styles.menuIconContainer}
      >
        <Menu
          className={styles.menuIcon} // added to override default icon size
        />
      </IconButton>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!isIOS} // disables backdrop transition for iOS
        disableDiscovery={isIOS} // disables swipe to open drawer for iOS
      >
        Example Drawer
      </SwipeableDrawer>
    </>
  );
};

export default PagesMenu;
