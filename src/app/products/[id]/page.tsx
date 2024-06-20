import Product from '@/app/components/Product'
import Productcounter from '@/app/components/Productcounter'
import React from 'react'

//Fetching data or all products here
const getproduct = async (id:number) =>{
  let res = await fetch(`https://localhost:7104/api/Products/${id}`,
    {
      headers: {
        'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`)
      }
    }
  )

  if(!(res.ok)){
    return undefined
  }
  
  let data = await res.json()
  return data.data
}


const page = async ({ params }: { params: { id: number } }) => {

  let product:product = await getproduct(params.id)

  return (
    <main>

<div className="flex gap-12 mt-0 my-24 items-center">
    <div className="image h-[350px] bg-gray-200 w-1/2">

    </div>
    <div className="p-2 min-w-[300px]">
      <p className="text-gray-600 font-semibold">
        {product.name}
      </p>
      <p className="text-gray-600 text-sm">
        {product.description}
      </p>
      <p className="text-gray-600">
        ${product.price}
      </p>

      <Productcounter id={product.id}/>
      {/* <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg">
        Add To Cart
      </button> */}
    </div>
  </div>
        
        <div className="grid grid-cols-4 gap-8">


      </div>
    </main>
  )
}

export default page