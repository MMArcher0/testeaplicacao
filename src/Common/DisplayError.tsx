import { Typography } from "@mui/material";
import React from "react";

interface ErrorDisplayProps {
  code: string;
  message: string;
}
export default function ErrorDisplay({ code, message }: ErrorDisplayProps) {
  return (
    <>
      <Typography variant="h6"> Error {code}</Typography>
      <Typography variant="h5"> {message} </Typography>
    </>
  );
}
