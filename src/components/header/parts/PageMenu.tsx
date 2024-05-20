import { Dispatch, SetStateAction } from "react";
import { isIOS } from "react-device-detect";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemIcon,
  IconButton,
  SwipeableDrawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
  menuItem: {
    // when tab settings added to customTheme object, replace these setting below
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem", // utilize rem for responsive text sizing in responsive design
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  menuItemEstimate: {
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      opacity: 1, // removes hove effect when clicking menu icon button in header
    },
  },
}));

interface PagesMenuProps {
  openDrawer: boolean;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const PagesMenu = ({
  openDrawer,
  value,
  setValue,
  setOpenDrawer,
}: PagesMenuProps) => {
  const styles = useStyles();

  const handleMenuItemClick = (i: number) => {
    setValue(i);
    setOpenDrawer(false);
  };

  const menuItemOptions = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Free Estimate", link: "/estimate" },
  ];

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
        classes={{ paper: styles.menu }}
      >
        <List disablePadding>
          {
            // map through the menuItemOptions array to create a ListItem for each item
            menuItemOptions.map((item, i) => (
              <ListItem
                divider
                button
                component={Link}
                to={item.link}
                onClick={() => handleMenuItemClick(i)}
                selected={value === i}
                key={i}
                className={
                  item.name === "Free Estimate" ? styles.menuItemEstimate : ""
                }
              >
                <ListItemText
                  disableTypography
                  primary={item.name}
                  className={styles.menuItem}
                />
              </ListItem>
            ))
          }
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default PagesMenu;
