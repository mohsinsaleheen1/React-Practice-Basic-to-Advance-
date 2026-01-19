import React from "react";
import InputField from "../../Components/InputField";
import { Paper, Typography } from "@mui/material";

const Singup = () => {
  return (
    <Paper sx={{ width: "50%", p: "20px" }}>
      <Typography variant="h3" component="h3">
        Signup form
      </Typography>

      <InputField label={"Firstname"} />
      <InputField label={"Lastname"} />
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <InputField label={"Number"} />
    </Paper>
  );
};

export default Singup;
