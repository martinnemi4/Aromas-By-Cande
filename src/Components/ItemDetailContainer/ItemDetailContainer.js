import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [product, setProduct]= useState([])
    const {id}= useParams();

    const arrayDeproductos = [
        {
            id: 1,
            category: "chocolates",
            nombre: "Torta de Oreo", 
            precio: "$5.000",
            imagen: "https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tarta-de-Oreo.jpg"
        },
        {
            id: 2,
            category: "chocolates",
            nombre: "Chocotorta", 
            precio: "$5.000",
            imagen: "https://www.clarin.com/img/2020/07/15/la-chocotorta-perfecta-planeta___qH4UH5dLO_1256x620__1.jpg"
        },
        {
            id: 3,
            nombre: "Torta de Frutillas", 
            precio: "$5.000",
            imagen: "https://www.lanacion.com.ar/resizer/H_3dpkDawL8jYeoyT37KVrL36AY=/309x206/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SOQYIXD4EFDLFMITRRHFAQEXEE.jpg"
        },
        {
            id: 4,
            nombre: "Marquise de Chocolate", 
            precio: "$5.000",
            imagen: "https://truffle-assets.imgix.net/79143177-marquise-1920x1080-thumbnail.jpg"
        }
        ];

    useEffect (()=> {
        const promise = new Promise ((resolve, reject)=> {
            setTimeout(() => {
                resolve(arrayDeproductos)
            }, 1500);
        });
        promise
            .then ((res)=> setProduct(res.find((product)=>product.id === id)))
            .catch((error)=> console.log(error));
    }, [id]);

    return (
    <div>
        <ItemDetail
        product={product}
        />
    </div>
    )
}

export default ItemDetailContainer