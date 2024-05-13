import {
  Box,
  Tab,
  Tabs,
  Theme,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PageTabs = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={0} indicatorColor="primary">
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Services" {...a11yProps(1)} />
        <Tab label="The Revolution" {...a11yProps(2)} />
        <Tab label="About Us" {...a11yProps(3)} />
        <Tab label="Contact Us" {...a11yProps(4)} />
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Services
      </TabPanel>
      <TabPanel value={value} index={2}>
        The Revolution
      </TabPanel>
      <TabPanel value={value} index={3}>
        About Us
      </TabPanel>
      <TabPanel value={value} index={4}>
        Contact Us
      </TabPanel> */}
    </Box>
  );
};

export default PageTabs;
