import { useContext, useEffect} from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import ListProducts from "../../../components/ListProducts";
import Wrapper from "../../../components/Wrapper";
import { StoreContext } from "../../../context/StoreContext/context";

export default function ProductsByCategory() {
  const { products, getProductsByCategory } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query?.category) {
      getProductsByCategory(router.query?.category);
    }
  }, [router.query.category]);

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
            <Typography color="text.primary">{router.query?.category}</Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ marginTop: "80px" }}></Box>
        <ListProducts products={products} />
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
};
