import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import ReactImageMagnify from "react-image-magnify";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useReactImageMagnify from "../../hooks/useReactImageMagnify";
import { StoreContext } from "../../context/StoreContext/context";
import { CartContext } from "../../context/CartContext/context";
import Wrapper from "../../components/Wrapper";

export default function ProductDetails() {
  const router = useRouter();
  const productID = router.query?.id;
  const enlargedImagePosition = useReactImageMagnify();
  const { product, getProduct } = useContext(StoreContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    productID && getProduct(productID);
  }, [productID]);

  return (
    <Wrapper>
      <Box sx={styles.container}>
        <Box sx={{ width: "100%" }}>
          <Breadcrumbs sx={{ marginLeft: "20px", marginTop: "20px" }} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/products/">
              Products
            </Link>
            <Typography color="text.primary">{product?.category}</Typography>
          </Breadcrumbs>
        </Box>
        <Grid container sx={styles.mainContainer} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid sx={{ display: "flex", justifyContent: "center", zIndex: "10" }} xs={10} md={6} lg={4}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Imagen",
                  width: 350,
                  height: 450,
                  src: product?.image,
                },
                largeImage: {
                  src: product?.image,
                  width: 900,
                  height: 900,
                },
                enlargedImagePosition,
                enlargedImageStyle: { zIndex: "100" },
                enlargedImageContainerDimensions: { width: "160%", height: "100%" },
              }}
            />
          </Grid>
          <Grid xs={10} md={6} lg={6.5}>
            <Box sx={{ paddingBottom: "28px", borderBottom: "1px solid #ccc", position: "relative" }}>
              <Typography variant="h2" sx={{ fontWeight: "bold", marginTop: "30px" }}>
                {product?.title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "10px" }}>
                ${product?.price}
              </Typography>
              <Box sx={{ position: "absolute", bottom: "6px", right: "0" }}>
                <Typography sx={{ color: "#555", fontWeight: "bold", textAlign: "end" }} variant="subtitle1">
                  Category
                </Typography>
                <Typography sx={{ color: "#777" }} variant="subtitle2">
                  {product?.category}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Button onClick={() => addToCart(product)} variant="contained" color="primary" sx={{ height: "48px" }}>
                Add to Cart
              </Button>
            </Box>
            <Typography sx={{ color: "#555", marginTop: "20px" }} variant="subtitle1">
              {product?.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    maxWidth: {
      xs: "100%",
      sm: "90%",
      lg: "1200px",
      xl: "1400px",
    },
    margin: "0 auto",
  },
  mainContainer: {
    width: "auto",
    marginTop: {
      xs: "80px",
      lg: "120px",
      xl: "160px",
    },
    maxWidth: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
};
