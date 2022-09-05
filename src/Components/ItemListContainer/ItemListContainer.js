import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { ImageNotSupported } from '@mui/icons-material';
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const arrayDeproductos = [
    {
      nombre: "Torta de Oreo", 
      precio: "$5.000",
      imagen: "https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tarta-de-Oreo.jpg"
    },
    {
      nombre: "Chocotorta", 
      precio: "$5.000",
      imagen: "https://www.clarin.com/img/2020/07/15/la-chocotorta-perfecta-planeta___qH4UH5dLO_1256x620__1.jpg"
    },
    {
      nombre: "Torta de Frutillas", 
      precio: "$5.000",
      imagen: "https://www.lanacion.com.ar/resizer/H_3dpkDawL8jYeoyT37KVrL36AY=/309x206/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SOQYIXD4EFDLFMITRRHFAQEXEE.jpg"
    },
    {
      nombre: "Marquise de Chocolate", 
      precio: "$5.000",
      imagen: "https://truffle-assets.imgix.net/79143177-marquise-1920x1080-thumbnail.jpg"
    }
  ];

  const promise = new Promise ((res, rej) => {
    res(arrayDeproductos);
  });

  useEffect(() => {
    promise
      .then((res)=> {
        setProducts(res);
      })
      .catch((error)=> console.log(error));
  }, []
  );

  return (
    <div>
        <div>
          <ItemList
          products={products}
          />
        </div>
    </div>
  )
}

export default ItemListContainer;