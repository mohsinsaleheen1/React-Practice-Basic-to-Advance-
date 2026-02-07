import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/AppBar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
export const Actions = () => {
  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ShoppingCardIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </MyList>
  );
};
