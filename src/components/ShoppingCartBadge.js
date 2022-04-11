import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

export default function CustomizedBadges() {
  const navigate = useNavigate()
  return (
    <IconButton
        sx={{ color: "#000"}}
        onClick={() => navigate('/cart')}
    >
        <ShoppingCartIcon />
    </IconButton>
  );
}
