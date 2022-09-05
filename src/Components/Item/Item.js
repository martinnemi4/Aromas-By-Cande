import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount';

export default function Item({product}) {
  const {nombre, precio, imagen} = product
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {precio}
        </Typography>
      </CardContent>

      <ItemCount
      stock="10"
      initial="1"
      onAdd="1"
      />
    </Card>
  );
}
