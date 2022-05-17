import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import capa from '../../assets/propofando.png'
import {useNavigate} from 'react-router-dom';

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() =>navigate('/projects/propofando')}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={capa}
          alt="Propofando"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Propofando
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
