import { Box, Button } from "@mui/material";
import React from "react";
import ErrorDisplay from "../../Common/DisplayError";
import useNavigation from "../../Routes/useNavigation";

export default function NotFound() {
  const { navigateBack } = useNavigation();

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
      <ErrorDisplay code={"404"} message={"NotFound"} />
      <Button variant="contained" onClick={() => navigateBack()}>
        Retornar
      </Button>
    </Box>
  );
}
