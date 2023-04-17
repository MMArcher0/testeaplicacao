import { Box, IconButton, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthenticationContext } from "../../../Context/Authentication";
import useNavigation from "../../../Routes/useNavigation";
import { Navigate } from "react-router";

export default function Header() {
  const { authentication, logout } = useAuthenticationContext();
  const { navigateToLogin } = useNavigation();

  if (!authentication) return <Navigate to={"/unauthorized"} />;

  return (
    <header>
      <Box
        sx={{
          background: blue[500],
          height: 50,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ padding: 2 }}>FJZ Sys</Typography>
        <IconButton
          onClick={() => {
            logout();
            navigateToLogin();
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </header>
  );
}
