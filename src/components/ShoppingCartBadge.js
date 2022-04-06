import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton
        sx={{ color: "#000"}}
    >
      <StyledBadge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
