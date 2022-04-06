import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  },
}));

export default function BackButton() {
  return (
    <IconButton
        sx={{
            color: "#000",
            marginRight: 1,
        }}
        component={Link}
        to="/dashboard"
    >
        <StyledBadge color="primary">
            <ArrowBackIcon />
        </StyledBadge>
    </IconButton>
  );
}
