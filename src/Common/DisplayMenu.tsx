import React from "react";
import { IMenuItem } from "../Interfaces/IMenuItem";
import { ListItemIcon, ListItemText, MenuItem, Menu } from "@mui/material";

interface DisplayMenuProps {
  mItem: IMenuItem[];
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

export default function DisplayMenu({
  mItem,
  anchorEl,
  open,
  onClose,
}: DisplayMenuProps) {
  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
      {mItem.map((mi, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            mi.handleClick();
          }}
        >
          {mi.icon && <ListItemIcon>{mi.icon}</ListItemIcon>}
          <ListItemText>{mi.name}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
}
