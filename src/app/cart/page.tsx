'use client';
import React, { useEffect, useState } from 'react';
import Cartproduct from './(components)/Cartproduct';

type CartItem = {
  id: number;
  product?: any;
  price: number;
  productId: number;
  stockQuantity: number;
  // Add other relevant fields
};

const getcart = async (): Promise<CartItem[] | undefined> => {
  try {
    let res = await fetch("https://localhost:7104/api/Cart", {
      headers: {
        'Authorization': 'Basic ' + btoa('11182204:60-dayfreetrial')
      }
    });

    if (!res.ok) {
      console.error('Response error', res.status);
      return undefined;
    }

    let data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return undefined;
  }
};

const Page: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      let fetchedCartProducts = await getcart();
      if (fetchedCartProducts) {
        setCartProducts(fetchedCartProducts);
      }
    };

    fetchCartProducts();
  }, []);

  console.log("Hello", cartProducts);

  return (
    <main>
      <p className="text-center py-8">Products In Cart</p>
      <div className="px-2">
        {cartProducts.length > 0 ? (
          cartProducts.map(item => <Cartproduct item={item} key={item.id} />)
        ) : (
          <div className="text-center text-red-500">No products in cart</div>
        )}
      </div>
    </main>
  );
};

export default Page;
