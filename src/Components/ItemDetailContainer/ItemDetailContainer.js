import React, {useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"

const GetItem = () => {
    const [detail, setDetail] = useState([]);
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemDetail)
            .then(useState(ItemDetail));
        }, 1500);
    })
}

export default GetItem;