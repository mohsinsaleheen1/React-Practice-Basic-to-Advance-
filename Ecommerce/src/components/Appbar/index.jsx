import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./AppbarMobile";
import AppBarDesktop from "./AppBarDesktop";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <AppbarMobile /> : <AppBarDesktop />}</>;
}
