import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from 'react-router-dom';

export default function MasonryLanding() {
    const navigate = useNavigate()
    
  return (
    <Box sx={{ width: "100%"}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=33.33%&fit=crop&auto=format`}
              srcSet={`${item.img}?w=33.33%&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => navigate('products')}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/wP7731m.jpg',
    title: 'Bedroom',
  },
  {
    img: 'https://i.imgur.com/maenwNf.jpg',
    title: 'Living Room',
  },
  {
    img: 'https://i.imgur.com/e1O05a8.jpg',
    title: 'Dining Room',
  },
  {
    img: 'https://i.imgur.com/sTIpvWP.jpg',
    title: 'Living Area',
  },
  {
    img: 'https://i.imgur.com/DpM37Xr.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://i.imgur.com/o38HPSn.jpg',
    title: 'Living Area',
  },
];
