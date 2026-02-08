import { Stack } from "@mui/material";
import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function SingleProducts({ product, matches }) {
  return (
    <Product>
      <ProductImage src={product.image}></ProductImage>
      <ProductMeta product={product} matches={matches} />
      <ProductActionsWrapper>
        <Stack direction="column">
          <ProductFavButton isfav={1}>
            <FavoriteIcon />
          </ProductFavButton>
        </Stack>
      </ProductActionsWrapper>
    </Product>
  );
}
