import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/Banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/public/banner/banner.png"></BannerImage>
      <BannerContent>
        <Typography variant="h6">Huge Collections</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad
          distinctio autem voluptatum nam ratione quae quis ab dolore. Quos
          voluptatum, minus libero laboriosam placeat quisquam aspernatur
          molestias quia quibusdam!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
