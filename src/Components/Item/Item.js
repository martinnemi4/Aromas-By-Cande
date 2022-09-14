import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount';
import { NavigateNextSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Item({product}) {
  const {nombre, precio, imagen, id} = product
  return (
<a>
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

      <Link to={`/detail/${id}`}>
        <Button>Ver Mas</Button>
      </Link>
    </Card></a>
  );
}
