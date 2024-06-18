import React from 'react';
import axios from 'axios';

interface CartItem {
  id: number;
  product: {
    name: string;
  };
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const updateCart = (id: number, quantity: number) => {
    axios.put(`http://adamasenam-001-site1.ctempurl.com/api/Cart/${id}`, { quantity })
      .then(() => {
        setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity } : item));
      })
      .catch(error => console.error('Error updating cart:', error));
  };

  const removeFromCart = (id: number) => {
    axios.delete(`http://adamasenam-001-site1.ctempurl.com/api/Cart/${id}`)
      .then(() => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.product.name} - Quantity: {item.quantity}
            <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
