import { Typography, Paper, Box, TextField, Button } from "@mui/material";
import React from "react";
import { useUsers } from "../../../Firebase/Uses/useUsers";
import { IUser } from "../../../Interfaces/IUser";
import PageLayout from "../../PageLayout/PageLayout";

export default function UsersCreate() {
  const [creatingUser, setCreatingUser] = React.useState<Partial<IUser>>();
  const { createLoginUser, createUser } = useUsers();

  const handleCreateUser = async () => {
    if (creatingUser?.email && creatingUser?.password) {
      const response = await createLoginUser(
        creatingUser.email,
        creatingUser.password
      );
      if (response[1] === "created") {
        const cUser = { ...creatingUser, id: response[0] as string } as IUser;
        await createUser(cUser);
        setCreatingUser(undefined);
      } else {
        console.log(response[0]);
      }
    }
  };
  return (
    <PageLayout title="Criar usuario">
      <form>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: 2,
              gap: 1,
              padding: 2,
              width: "380px",
            }}
          >
            <Typography variant="h5">Cadastrar Usuario</Typography>
            <TextField
              label="Nome completo"
              variant="standard"
              size="small"
              value={creatingUser?.name ?? ""}
              onChange={(e) =>
                setCreatingUser({
                  ...creatingUser,
                  name: e.currentTarget.value,
                })
              }
            />
            <TextField
              label="CPF"
              variant="standard"
              size="small"
              value={creatingUser?.identification ?? ""}
              onChange={(e) =>
                setCreatingUser({
                  ...creatingUser,
                  identification: e.currentTarget.value,
                })
              }
            />
            <TextField
              label="E-mail"
              variant="standard"
              size="small"
              value={creatingUser?.email ?? ""}
              onChange={(e) =>
                setCreatingUser({
                  ...creatingUser,
                  email: e.currentTarget.value,
                })
              }
            />
            <TextField
              label="Senha"
              variant="standard"
              size="small"
              value={creatingUser?.password ?? ""}
              onChange={(e) =>
                setCreatingUser({
                  ...creatingUser,
                  password: e.currentTarget.value,
                })
              }
            />
            <Button onClick={() => handleCreateUser()}>Cadastrar</Button>
          </Paper>
        </Box>
      </form>
    </PageLayout>
  );
}
