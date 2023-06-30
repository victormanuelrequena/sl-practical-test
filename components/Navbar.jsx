import { useContext } from "react";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CartContext } from "../context/CartContext/context";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 3,
      backgroundColor: "#000",
      padding: "0 4px",
    },
  }));

  return (
    <Box sx={styles.container}>
      <Link href="/products">
        <Image src="/assets/logo.png" alt="logo" width={100} height={40} quality={100} style={styles.logo} />
      </Link>
      <Link href="/cart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart?.length} color="secondary">
            <LocalMallIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </Box>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "84px",
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "0 40px 0 40px",
    boxShadow: "0 20px 30px 0 rgba(0,0,0,0.05)",
  },
  logo: {
    width: "100px",
    height: "40px",
    cursor: "pointer",
  },
};
