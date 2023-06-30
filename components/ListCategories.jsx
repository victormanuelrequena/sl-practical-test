import { useContext } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { StoreContext } from "../context/StoreContext/context";

export default function ListCategories() {
  const { categories } = useContext(StoreContext);
  const router = useRouter();
  return (
    <Box sx={styles.category}>
      {categories.map((category) => (
        <Box sx={styles.imageBox} key={category}>
          <Image
            style={styles.imageCategory}
            width={260}
            height={260}
            key={category}
            alt={category}
            onClick={() => router.push(`/products/category/${category}`)}
            src={`/assets/${category}.jpg`}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: "10px", cursor: "pointer" }}>
            {category}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

const styles = {
  category: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "40px",
    gap: "20px",
  },
  imageBox: {
    "& img": {
      transition: "transform .2s",
      "&:hover": { transform: "scale(.99)" },
    },
  },
  imageCategory: {
    width: "260px",
    height: "260px",
    cursor: "pointer",
    borderRadius: "8px",
    objectFit: "cover",
    transition: "transform 0.3s ease-out",
    ":hover": {
      transform: "scale(.5)",
    },
  },
};
