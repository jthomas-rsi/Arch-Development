import { Box } from "@material-ui/core";
import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
