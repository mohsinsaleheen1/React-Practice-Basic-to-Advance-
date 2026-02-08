import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import SingleProducts from "./SingleProducts";
export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ margin: "20px 4px 10px 4px" }}
    >
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <SingleProducts product={product} matches={matches} />
        </Grid>
      ))}
    </Grid>
  );
}
