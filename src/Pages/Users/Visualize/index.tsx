import Typography from "@mui/material/Typography";
import React from "react";
import { useUsers } from "../../../Firebase/Uses/useUsers";
import PageLayout from "../../PageLayout/PageLayout";
import ListUsers from "./components/ListUsers";

export default function UsersVisualize() {
  return (
    <PageLayout title="Visualizar usuarios">
      <ListUsers />
    </PageLayout>
  );
}
