import { Paper, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Navigate } from "react-router";
import { useAuthenticationContext } from "../../Context/Authentication";
import { useUsers } from "../../Firebase/Uses/useUsers";
import useNavigation from "../../Routes/useNavigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { singIn } = useUsers();
  const { setAuthentication, authentication } = useAuthenticationContext();
  const { navigateToMain } = useNavigation();

  const handleLogin = async () => {
    const validate = await singIn(email, password);
    if (validate[1] === "validated") {
      setAuthentication(validate[0]);
      localStorage.setItem("user", validate[0]);
      navigateToMain();
    } else {
      setError(true);
    }
  };

  if (authentication) return <Navigate to={"/main"} />;

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          padding: 2,
          gap: 2,
        }}
      >
        <Typography variant="h4">Fazer Login</Typography>
        <TextField
          error={error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-mail"
          helperText={error ? "Campo invalido" : null}
        />
        <TextField
          error={error}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
          type="password"
          helperText={error ? "Campo invalido" : null}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
}
