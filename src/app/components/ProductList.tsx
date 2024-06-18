import React from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProductList: React.FC<ProductListProps> = ({ products, setCart }) => {
  const addToCart = (productId: number) => {
    axios.post(`http://adamasenam-001-site1.ctempurl.com/api/Cart`, { productId, quantity: 1 })
      .then((response: { data: any; }) => {
        setCart(prevCart => [...prevCart, response.data]);
      })
      .catch((error: any) => console.error('Error adding to cart:', error));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
