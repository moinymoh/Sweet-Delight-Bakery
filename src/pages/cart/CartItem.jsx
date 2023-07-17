import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { currency } from "../../utils/currencyConverter";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, increaseCart, decreaseCart, updateCartItemCount } =
    useContext(ShopContext);

  const money = currency(price);

  return (
    <Box marginBottom={2} display="flex" alignItems="center">
      <Card
        sx={{
          width: 700,
          height: 250,
          padding: 1.5,
          borderRadius: 8,
          boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center">
            <img
              src={productImage}
              alt={productName}
              width={200}
              height={200}
            />
            <Box marginLeft={2}>
              <>
                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
                  <strong>{productName}</strong>
                </Typography>
                <Typography variant="h5" component="h5">
                  Price: ₹{money}
                </Typography>
              </>
              <Box
                display="flex"
                alignItems="center"
                marginTop="15px"
                gap="10px"
              >
                <Button
                  onClick={() => decreaseCart(id)}
                  style={{
                    minWidth: "34px",
                    height: "38px",
                    fontSize: "16px",
                    border: "1px solid maroon",
                    borderRadius: "3px",
                  }}
                >
                  -
                </Button>
                <TextField
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                  variant="outlined"
                  size="small"
                  style={{
                    width: "40px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                />
                <Button
                  onClick={() => increaseCart(id)}
                  style={{
                    minWidth: "34px",
                    height: "38px",
                    fontSize: "16px",
                    border: "1px solid maroon",
                    borderRadius: "3px",
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
