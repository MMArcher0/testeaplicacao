import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import UpperMenu from "./components/UpperMenu";
interface PageLayoutProps {
  children?: ReactElement | ReactElement[];
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <Box sx={{ height: "100%" }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <UpperMenu />
      {children}
    </Box>
  );
}
