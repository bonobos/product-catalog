import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import "../styles/product.css"

const Product = props => { 
  const {id} = useParams();

  return (
    <div className="Product">
    </div>
  )
};

export default Product;