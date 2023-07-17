import { Box, Typography } from "@mui/material";

const Checkout = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "300px" }}>
      <Typography variant="h2" component="h1" color="#FB6090">
        Thank you for choosing Sweet Delights Bakery!
      </Typography>
      <Typography variant="h2" component="h2" color="#FB6090">
        Your order has been placed successfully.
      </Typography>
    </Box>
  );
};

export default Checkout;
