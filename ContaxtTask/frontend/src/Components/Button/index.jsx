import { Button } from "@mui/material";
import React from "react";

const Buttons = ({ onClick, value }) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        {value}
      </Button>
    </div>
  );
};

export default Buttons;
