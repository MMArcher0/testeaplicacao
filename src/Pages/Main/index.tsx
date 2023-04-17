import { Box, Typography } from "@mui/material";
import React from "react";
import PageLayout from "../PageLayout/PageLayout";

export default function Main() {
  return (
    <PageLayout title="Main Page">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60%",
        }}
      >
        <Typography variant="h6">Bem vindo ao FJZ Sys</Typography>
      </Box>
    </PageLayout>
  );
}
