import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton
        sx={{
            color: "#000",
            marginRight: 1,
        }}
        component={Link}
        to="/login"
    >
        <StyledBadge color="primary">
            <PersonOutlineIcon />
        </StyledBadge>
    </IconButton>
  );
}
