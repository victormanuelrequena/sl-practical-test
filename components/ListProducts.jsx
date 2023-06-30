import { Box, Grid } from "@mui/material";
import ProductItem from "./ProductItem";

export default function ListProducts({ products }) {
  return (
    <Box sx={styles.wrapper}>
      <Grid sx={styles.list} container rowGap={2} columns={{ xs: 10, sm: 10, md: 10, lg: 12 }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "auto",
    maxWidth: {
      xs: "100%",
      sm: "90%",
      md: "1200px",
      xl: "1200px",
    },
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
};
