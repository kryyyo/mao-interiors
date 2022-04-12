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
    title: 'Room1',
  },
  {
    img: 'https://i.imgur.com/ht6xa9h.jpg',
    title: 'Room2',
  },
  {
    img: 'https://i.imgur.com/41HLNss.jpg',
    title: 'Room3',
  },
  {
    img: 'https://i.imgur.com/pjhpQ6N.jpg',
    title: 'Room4',
  },
  {
    img: 'https://i.imgur.com/IjVj7d3.jpg',
    title: 'Room5',
  },
  {
    img: 'https://i.imgur.com/xLKOvn8.jpg',
    title: 'Room6',
  },
  {
    img: 'https://i.imgur.com/sTIpvWP.jpg',
    title: 'Room7',
  },
  {
    img: 'https://i.imgur.com/VJmUgEP.jpg',
    title: 'Room8',
  },
  {
    img: 'https://i.imgur.com/3GNC2In.jpg',
    title: 'Room9',
  },
  {
    img: 'https://i.imgur.com/uHpTS7K.jpg',
    title: 'Room10',
  },
  {
    img: 'https://i.imgur.com/Lr3ajZB.jpg',
    title: 'Room11',
  },
  {
    img: 'https://i.imgur.com/56djLzZ.jpg',
    title: 'Room12',
  },
];
