import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Nav from '../Shared/Nav/Nav';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const url = `http://localhost:7000/product/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <Nav></Nav>
            purchase page
            <h5>{product.name}</h5>
        </div>
    );
};

export default Purchase;