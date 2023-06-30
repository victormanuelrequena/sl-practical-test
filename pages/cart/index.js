import { useContext } from "react";
import Wrapper from "../../components/Wrapper";
import { Box, Breadcrumbs, Grid, Typography, Button } from "@mui/material";
import { CartContext } from "../../context/CartContext/context";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "90%",
            lg: "1200px",
            xl: "1400px",
          },
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", marginTop: "40px" }}>
          <Typography variant="h2" sx={{ fontWeight: "Bold" }}>
            Cart
          </Typography>
        </Box>
        {/* Products List */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "20px",
            margin: "20px",
            // border: "1px solid green",
          }}
          container
          rowGap={2}
          columns={{ xs: 10, sm: 10, md: 10, lg: 12 }}
        >
          {cart.map((item) => (
            <Grid
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                padding: "20px 40px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
              item
              xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  columnGap: 4,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: "80px", height: "80px", cursor: "pointer", borderRadius: "8px" }}
                  width={80}
                  height={80}
                  alt={item.category}
                  src={item?.image}
                />
                <Typography variant="h6" sx={{}}>
                  {item.title}
                </Typography>
                <Typography variant="h6" sx={{}}>
                  {item.quantity}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Oswald" }}>
                ${item.price}
              </Typography>
              <Button
                variant="contained"
                sx={{ display: "flex", justifySelf: "flex-end" }}
                color="error"
                size="medium"
                onClick={() => removeFromCart(item)}
              >
                Eliminar
              </Button>
            </Grid>
          ))}
        </Grid>
        {/* Cart item */}
      </Box>
    </Wrapper>
  );
}
