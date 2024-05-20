import {
  Button,
  // Link,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Theme,
  makeStyles,
} from "@material-ui/core";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";

//TODO Fix this component

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    // ...theme.typography.tab, // will use once custom tab typography is implemented
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem", // utilize rem for responsive text sizing in responsive design
    minWidth: 10,
    marginLeft: "25px", // use pixels for fixed spacing
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    height: "45px",
    color: theme.palette.common.white,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
  menuItem: {
    // when tab settings added to customTheme object, add here
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    fontSize: "1rem", // utilize rem for responsive text sizing in responsive design
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

interface PageTabsProps {
  anchorEl: HTMLElement;
  openServicesMenu: boolean;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  handleChange: (event: ChangeEvent<{}>, newValue: number) => void;
  handleOpen: (event: MouseEvent<HTMLAnchorElement>) => void;
  handleClose: () => void;
  handleMenuItemClick: (i: number) => void;
  menuItemIndex: number;
}

const PageTabs = ({
  anchorEl,
  menuItemIndex,
  openServicesMenu,
  value,
  setValue,
  handleChange,
  handleClose,
  handleOpen,
  handleMenuItemClick,
}: PageTabsProps) => {
  const styles = useStyles();

  // list of services menu options
  const servicesMenuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  // list of Tab options for the header
  const tabOptions = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="page tabs"
      indicatorColor="primary" // set to primary and blends into header background color
      className={styles.tabContainer}
    >
      {
        // map tab options to tab components
        tabOptions.map((option, index) =>
          // if the option is "Services", render a tab with a menu
          option.name === "Services" ? (
            <Tab
              key={index}
              aria-owns={anchorEl ? "services-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              onMouseOver={(e) => {
                // opens menu when mouse hovers over tab
                handleOpen(e as unknown as MouseEvent<HTMLAnchorElement>);
              }}
              label={option.name}
              component={Link}
              to={option.link}
              className={styles.tab}
              {...a11yProps(index + 1)}
            />
          ) : (
            <Tab
              key={index}
              label={option.name}
              component={Link}
              to={option.link}
              className={styles.tab}
              {...a11yProps(index)}
            />
          ),
        )
      }
      <Button
        className={styles.button}
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={openServicesMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }} // closes menu when mouse leaves menu
        elevation={0}
        style={{ zIndex: 1302 }}
        classes={{ paper: styles.menu }} // using "paper" CSS rule name customizes paper of the menu component when rendered
      >
        {servicesMenuOptions.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            onClick={() => {
              handleClose();
              setValue(1);
              handleMenuItemClick(index);
            }}
            selected={index === menuItemIndex && value === 1}
            to={option.link}
            component={Link}
            classes={{ root: styles.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Tabs>
  );
};

export default PageTabs;
