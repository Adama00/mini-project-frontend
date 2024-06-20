import Link from "next/link";
import React from "react";
import Productcounter from "./Productcounter";

const addtocart = async () => {
  let res = await fetch("https://localhost:7104/api/Cart",{cache : "no-store", headers: {
    'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`)
  }});

  if (!res.ok) {
    
    return undefined;
  }

  let data = await res.json();
  return data;
};

const Product = ({ product }: { product: product }) => {
  return (
    <div className="">
      <Link href={`/products/${product.id}`}>
        <div className="image h-36 bg-gray-200"></div>
      </Link>

      <div className="p-2">
        <Link href={`/products/${product.id}`}>
          <p className="text-gray-600 font-semibold">{product.name}</p>
        </Link>
        <p className="text-gray-600">${product.price}</p>

       <Productcounter id={product.id}/>
      </div>
    </div>
  );
};

export default Product;
