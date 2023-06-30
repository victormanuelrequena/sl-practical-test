import { Box, Button, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h1" sx={{ color: "#fff", fontFamily: "Oswald, sans-serif" }}>
        ⚡ | SHOP
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: "1rem", color: "#f3f3f3", fontFamily: "Oswald, sans-serif" }}>
        Descubre lo extraordinario en lo criollo.
      </Typography>
      <Link prefetch href="/products">
        <Button
          variant="contained"
          primary
          sx={{
            marginTop: "3rem",
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          Products
        </Button>
      </Link>
    </Box>
  );
}
