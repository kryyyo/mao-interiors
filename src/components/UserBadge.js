import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from "react-router-dom";
import UserContext from '../UserContext';
import { useContext } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
  },
}));

export default function CustomizedBadges() {

  const {user} = useContext(UserContext)

  return (
    <>
      {
        user.id !== null ?
          <IconButton
              sx={{
                  color: "#000",
                  marginRight: 1,
              }}
              component={Link}
              to="/dashboard"
          >
              <StyledBadge color="primary">
                  <PersonOutlineIcon />
              </StyledBadge>
          </IconButton>
        :
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
      }
    </>
  );
}
