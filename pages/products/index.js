import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ListProducts from "../../components/ListProducts";
import { StoreContext } from "../../context/StoreContext/context";
import Wrapper from "../../components/Wrapper";
import ListCategories from "../../components/ListCategories";

const productLimitsValues = [8, 12, 16, 20];

export default function Products() {
  const { products, getProducts, getCategories } = useContext(StoreContext);
  const [productsLimit, setProductsLimit] = useState(8);

  useEffect(() => {
    getProducts(`?limit=${productsLimit}`);
    getCategories();
  }, [productsLimit]);

  return (
    <Wrapper>
      <Box sx={styles.container}>
        <Box sx={{ display: "flex", width: "100%", marginTop: "40px" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", zIndex: "10" }}>
            Shop All
          </Typography>
        </Box>
        <ListCategories />
        {/* Filters */}
        <Box sx={styles.filters}>
          <label htmlFor="products-limit">Products Limit</label>
          <select
            style={styles.selectLimit}
            id="products-limit"
            value={productsLimit}
            onChange={(event) => setProductsLimit(event.target.value)}
            defaultValue={8}
          >
            {productLimitsValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </Box>
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
    margin: "auto",
  },
  filters: {
    display: "flex",
    alignItems: "center",
    marginTop: "80px",
    marginBottom: "40px",
  },
  selectLimit: {
    marginLeft: "20px",
    background: "transparent",
    color: "#000",
    outlineColor: "transparent",
    border: "none",
    borderBottom: "1px solid #ccc",
    outline: "none",
    width: "80px",
  },
};
