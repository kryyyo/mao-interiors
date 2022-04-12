import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.imgur.com/XXnkesG.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/jzEpuhY.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/wP7731m.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/IjVj7d3.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/41HLNss.jpg',
  },
  {
    imgPath:
      'https://i.imgur.com/pjhpQ6N.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {images.map((step, index) => (
            <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: '100%',
                    height: "33vw",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                />
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
        />
      </>
  );
}

export default SwipeableTextMobileStepper;
