import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main>
        <div className="flex gap-12">
        <div className="flex gap-24">
            <Link href={'/admin/products'}>
            <div className="p-10 shadow-xl rounded-lg h-32 flex items-center">
                <p>View Products</p>
            </div>
            </Link>
        </div>

        
        <div className="flex gap-24">
            <Link href={'/admin/products/create'}>
            <div className="p-10 shadow-xl rounded-lg h-32 flex items-center">
                <p>Add Product</p>
            </div>
            </Link>
        </div>

        <div className="flex gap-24">
            <Link href={'/admin/categories/create'}>
            <div className="p-10 shadow-xl rounded-lg h-32 flex items-center">
                <p>Add Category</p>
            </div>
            </Link>
        </div>

        <div className="flex gap-24">
            <Link href={'/admin/regions/create'}>
            <div className="p-10 shadow-xl rounded-lg h-32 flex items-center">
                <p>Add Region</p>
            </div>
            </Link>
        </div>
        

        </div>

    </main>
  )
}

export default page