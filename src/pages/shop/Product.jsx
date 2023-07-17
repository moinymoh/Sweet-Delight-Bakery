import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { currency } from "../../utils/currencyConverter";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const money = currency(price);

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const buttonStyles = {
    backgroundColor: "transparent",
    color: "#821D30",
    border: "2px solid #821D30",
    minWidth: "100px",
    fontWeight: "bold",
    padding: "7px 15px",
    borderRadius: "8px",
    marginTop: "20px",
    transition: "all 0.2s ease-in",
    "&:hover": {
      backgroundColor: "maroon",
      color: "white",
      cursor: "pointer",
    },
  };

  const itemSizeStyles = {
    marginLeft: "5px",
    "&:hover": {
      color: "#000",
    },
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "transparent",
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box display="flex" flexDirection="column">
        <img src={productImage} alt={productName} width={200} height={200} style={{ margin: "auto" }}/>
        <Box mt={2} textAlign="center">
          <Typography variant="body1">
            <strong>{productName}</strong>
          </Typography>
          <Typography variant="h4">₹{money}</Typography>
        </Box>
        <Button style={buttonStyles} onClick={() => addToCart(id)}>
          Add To Cart
          <span style={itemSizeStyles}>
            {cartItemCount > 0 && <>{cartItemCount}</>}
          </span>
        </Button>
      </Box>
    </Box>
    // </Button>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
