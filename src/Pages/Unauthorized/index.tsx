import { Box, Button } from "@mui/material";
import React from "react";
import ErrorDisplay from "../../Common/DisplayError";
import useNavigation from "../../Routes/useNavigation";

export default function Unauthorized() {
  const { navigateToLogin } = useNavigation();

  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <ErrorDisplay code={"401"} message={"Unauthorized"} />
      <Button variant="contained" onClick={() => navigateToLogin()}>
        Fazer login
      </Button>
    </Box>
  );
}
