import { PRODUCTS } from "../../products";
import Product from "./Product";
import { Box, Typography } from "@mui/material";
// import "./Shop.css";

const Shop = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "0",
        paddingBottom: "100px"
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "25px",
          marginBottom: "50px",
          padding: "20px"
        }}
      >
        <Typography variant="h1" sx={{ fontFamily: "Kalam", color: "#FB6090" }}>Let's Taste Perfection</Typography>
        <Typography variant="h2" sx={{ fontFamily: "Kalam", color: "#FB6090" }}>Order Now</Typography>

      </Box>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          placeItems: "center",
          columnGap: "30px",
          rowGap: "50px",
        }}
      >
        {PRODUCTS.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
