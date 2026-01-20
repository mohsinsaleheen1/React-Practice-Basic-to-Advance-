import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup, IconButton, Stack, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Buttons = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <div>
      <Stack marginY={3} spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined" color="success">
          Contained
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Tooltip title="Click to see loading">
          <IconButton onClick={() => setLoading(true)} loading={loading}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};

export default Buttons;
