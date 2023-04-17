import { Box, Button, ButtonGroup } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import useNavigation from "../../../Routes/useNavigation";
import FoundationIcon from "@mui/icons-material/Foundation";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import { IMenuItem } from "../../../Interfaces/IMenuItem";
import DisplayMenu from "../../../Common/DisplayMenu";

export default function UpperMenu() {
  const {
    navigateToFinances,
    navigateToQuiosques,
    navigateToQuiosquesCreate,
    navigateToUsers,
    navigateToUsersCreate,
    navigateToMain,
  } = useNavigation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItens, setMenuItens] = useState<IMenuItem[]>([]);
  const open = Boolean(anchorEl);
  const quiosquesMenu: IMenuItem[] = [
    { name: "Visualizar", handleClick: () => navigateToQuiosques() },
    { name: "Criar", handleClick: () => navigateToQuiosquesCreate() },
  ];
  const usersMenu: IMenuItem[] = [
    { name: "Visualizar", handleClick: () => navigateToUsers() },
    { name: "Criar", handleClick: () => navigateToUsersCreate() },
  ];
  const financesMenu: IMenuItem[] = [
    { name: "Visualizar", handleClick: () => navigateToFinances() },
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    if (menu === "quiosques") {
      setMenuItens(quiosquesMenu);
    } else if (menu === "users") {
      setMenuItens(usersMenu);
    } else if (menu === "finances") {
      setMenuItens(financesMenu);
    } else {
      setMenuItens([]);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        background: blue[50],
        display: "flex",
        alignItems: "center",
        padding: 1,
      }}
    >
      <ButtonGroup variant="text">
        <Button onClick={() => navigateToMain()} startIcon={<HomeIcon />}>
          Inicio
        </Button>
        <Button
          onClick={(e) => handleClick(e, "users")}
          startIcon={<PersonIcon />}
        >
          Usuarios
        </Button>
        <Button
          onClick={(e) => handleClick(e, "quiosques")}
          startIcon={<FoundationIcon />}
        >
          Quiosques
        </Button>
        <Button
          onClick={(e) => handleClick(e, "finances")}
          startIcon={<AttachMoneyIcon />}
        >
          Finanças
        </Button>
      </ButtonGroup>
      <DisplayMenu
        anchorEl={anchorEl}
        mItem={menuItens}
        onClose={handleClose}
        open={open}
      />
    </Box>
  );
}
