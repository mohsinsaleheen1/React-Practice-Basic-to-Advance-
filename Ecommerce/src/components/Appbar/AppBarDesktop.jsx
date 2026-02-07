import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { Actions } from "./Actions";
const AppBarDesktop = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <>
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact" />
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions />
      </AppbarContainer>
    </>
  );
};

export default AppBarDesktop;
