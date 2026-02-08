import { Icon, IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const AppbarMobile = () => {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </AppbarContainer>
  );
};

export default AppbarMobile;
