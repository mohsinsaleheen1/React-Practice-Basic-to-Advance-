import { TextField } from "@mui/material";
import React from "react";

const InputFields = ({ label, type, value, onChange }) => {
  return (
    <div>
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        variant="standard"
      />
    </div>
  );
};

export default InputFields;
