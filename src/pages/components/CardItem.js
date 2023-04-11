import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardItem = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
