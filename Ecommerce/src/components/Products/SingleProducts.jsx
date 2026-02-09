import { Stack } from "@mui/material";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
export default function SingleProducts({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Product
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <ProductImage src={product.image}></ProductImage>
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction="column">
            <ProductFavButton isfav={1}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
}
