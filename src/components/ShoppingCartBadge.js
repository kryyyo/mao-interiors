import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CustomizedBadges() {
  return (
    <IconButton
        sx={{ color: "#000"}}
    >
        <ShoppingCartIcon />
    </IconButton>
  );
}
