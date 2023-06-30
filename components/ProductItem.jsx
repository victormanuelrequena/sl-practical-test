import { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductItem({ product }) {
  const router = useRouter();

  return (
    <Grid sx={styles.card} onClick={() => router.push(`/products/${product.id}`)} item xs={8} sm={4} md={3}>
      <Box sx={{ width: "90%" }}>
        <Image
          src={product?.image}
          alt={product?.category}
          width={180}
          height={200}
          style={styles.image}
          className="zoomOnHover"
        />
        <Typography variant="body1" sx={styles.title}>
          {product.title}
        </Typography>
        <Typography variant="subtitle1" sx={styles.price}>
          ${product.price}
        </Typography>
      </Box>
    </Grid>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    paddingY: 4,
    ":hover": {
      boxShadow: "0px 1px 5px rgba(0,0,0,0.15)",
      "& .zoomOnHover": {
        transform: "scale(1.10)",
        transition: "transform .3s",
      },
    },
  },
  image: {
    width: "160px",
    height: "180px",
    cursor: "pointer",
    borderRadius: "8px",
    margin: "auto",
    display: "block",
    alignSelf: "center",
  },
  title: {
    fontWeight: "400",
    marginTop: "30px",
    fontFamily: "Sans-serif",
  },
  price: {
    fontWeight: "bold",
    marginTop: "0px",
  },
};
