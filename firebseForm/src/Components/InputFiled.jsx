import { Box, TextField } from "@mui/material";
import React from "react";

const InputFiled = ({ label, type, value, onChange }) => {
  return (
    <>
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        variant="standard"
      />
    </>
  );
};

export default InputFiled;
