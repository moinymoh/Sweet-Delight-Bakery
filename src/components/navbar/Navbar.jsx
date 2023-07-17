import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Box } from '@mui/material'
import { Typography as Text} from '@mui/material'

const Navbar = () => {
  return (
    <Box fullWidth bgcolor='#FB6090' height='80px' zIndex={1000}>
      <Box display='flex' justifyContent='space-between' mx={15} paddingTop={3} >
        <Link to="/">
          <Text fontSize={25} color='#FFFFFF' fontWeight={700}> Sweet Delights Bakery </Text>
        </Link>
        <Link to="/cart">
          <Text display='flex' alignItems='center' color='#FFFFFF' fontSize={25} fontWeight={700}>  Your cart <ShoppingCart size={32} style={{ marginLeft: 10 }} /></Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
