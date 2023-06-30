import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Wrapper({ children }) {
  return (
    <Box sx={styles.container}>
      <Head>
        <title>⚡ SHOP</title>
      </Head>
      <Navbar />
      {children}
    </Box>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingBottom: "40px",
  },
};
