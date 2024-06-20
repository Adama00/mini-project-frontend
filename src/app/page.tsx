'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Product from './components/Product';

type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  regionId: number;
  stockQuantity: number;
  // Add other relevant fields
};

const getproducts = async (
  categoryId?: number,
  regionId?: number,
  minPrice?: number,
  maxPrice?: number
): Promise<ProductType[] | undefined> => {
  let query = new URLSearchParams();

  if (categoryId) query.append('categoryId', categoryId.toString());
  if (regionId) query.append('regionId', regionId.toString());
  if (minPrice) query.append('minPrice', minPrice.toString());
  if (maxPrice) query.append('maxPrice', maxPrice.toString());

  let res = await fetch(`https://localhost:7104/api/Products?${query.toString()}`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`)
    }
  });

  if (!res.ok) {
    return undefined;
  }

  let data = await res.json();
  return data.data as ProductType[];
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState({
    categoryId: '',
    regionId: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts = await getproducts(
        filters.categoryId ? parseInt(filters.categoryId) : undefined,
        filters.regionId ? parseInt(filters.regionId) : undefined,
        filters.minPrice ? parseFloat(filters.minPrice) : undefined,
        filters.maxPrice ? parseFloat(filters.maxPrice) : undefined
      );
      setProducts(fetchedProducts || []);
    };
    fetchProducts();
  }, [filters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let fetchedProducts = await getproducts(
      filters.categoryId ? parseInt(filters.categoryId) : undefined,
      filters.regionId ? parseInt(filters.regionId) : undefined,
      filters.minPrice ? parseFloat(filters.minPrice) : undefined,
      filters.maxPrice ? parseFloat(filters.maxPrice) : undefined
    );
    setProducts(fetchedProducts || []);
  };

  return (
    <main className="bg-white text-green-800 min-h-screen flex">
      <aside className="w-1/4 bg-green-100 p-4 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-green-700 font-bold mb-2">Category ID:</label>
            <input
              type="number"
              name="categoryId"
              value={filters.categoryId}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-bold mb-2">Region ID:</label>
            <input
              type="number"
              name="regionId"
              value={filters.regionId}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-bold mb-2">Min Price:</label>
            <input
              type="number"
              step="0.01"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-bold mb-2">Max Price:</label>
            <input
              type="number"
              step="0.01"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full p-2 border border-green-400 rounded focus:outline-none focus:border-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Apply Filters
          </button>
        </form>
      </aside>
      <section className="w-3/4 p-4">
        <div className="py-16 flex justify-between">
          <p className="text-center text-2xl font-bold">All Products In Store</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {products && products.map((product) => <Product key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}

export default Home;
