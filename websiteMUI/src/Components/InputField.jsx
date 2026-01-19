import { TextField } from "@mui/material";
import React from "react";

const InputField = ({label}) => {
  return (
    <div>
      <TextField id="standard-basic" label={label} variant="standard" />
    </div>
  );
};

export default InputField;
