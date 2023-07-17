import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
import { currency } from "../../utils/currencyConverter";
import { Box, Button, Typography } from "@mui/material";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const money = currency(totalAmount);

  const buttonStyles = {
    backgroundColor: "transparent",
    color: "maroon",
    fontWeight: "bold", 
    borderRadius: 10,
    transition: "color 0.3s, background-color 0.3s", 
    "&:hover": {
      backgroundColor: "maroon", 
      color: "white", 
    },
  };

  const navigate = useNavigate();

  const nav = () => {
    return navigate("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      marginBottom={4}
      overflow="auto"
    >
      <Box
        component="h1"
        fontSize="h3.fontSize"
        fontWeight="bold"
        color="#FB6090"
        mb={2}
      >
        Your Cart Items
      </Box>
      <Box>
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return (
              <Box key={index} component="div">
                <CartItem data={product} />
              </Box>
            );
          }
          return null;
        })}
      </Box>

      {totalAmount > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
            Total Amount: ₹{money}
          </Box>
          <Button
            variant="contained"
            sx={{ ...buttonStyles }}
            onClick={ nav }
          >
            Continue To Shop
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              {console.log("Your Total Amount is", totalAmount)}
              checkout();
              navigate("/checkout");
            }}
            sx={{ ...buttonStyles, mt: 2 }}
          >
            Place Order
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography
            variant="h4"
            style={{
              color: "#FB6090",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Your cart is currently empty. Explore our delightful selection and
            add your favorite treats to indulge your taste buds!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
