import React from 'react'
import Adminproduct from './(components)/Adminproduct'
import Link from 'next/link'

const getproducts = async () =>{
  let res = await fetch("http://adamasenam-001-site1.ctempurl.com/api/Products",{cache : "no-store"})

  // if(!(res.ok)){
  //   return undefined
  // }
  
  let data = await res.json()
  return data
}


const page = async () => {

  let products =await getproducts()
  console.log(products)


  return (
    <main>
          <div className=" py-16 flex justify-center gap-24">
      <p className="text-center">
        All Products In Store
      </p>

      </div>
    <div className="px-2 ">
    {products.length>0  ? products.map((product:product)=><Adminproduct key={product.id} product={product}/>) : <div>No products to Show</div>}
   </div>
</main>
  )
}

export default page