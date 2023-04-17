import React, { useEffect, useState } from "react";
import { IUser } from "../../../../Interfaces/IUser";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useUsers } from "../../../../Firebase/Uses/useUsers";

export default function ListUsers() {
  const { getUsers } = useUsers();

  return <List></List>;
}
