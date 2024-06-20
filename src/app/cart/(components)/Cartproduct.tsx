"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Cartproduct = ({item}:{item:cartitem}) => {

  const [count, setcount] = useState(1);

  const addcount = () => {
    if (count < 10) {
      setcount((prev) => prev + 1);
    } else {
      setcount(10);
    }
  };

  const subtractcount = () => {
    if (count > 1) {
      setcount((prev) => prev - 1);
    } else {
      setcount(1);
    }
  };
  
  const router = useRouter()
  const deleteitem = async (id:number)=>{
  
    try {
      const response = await fetch('https://localhost:7104/api/Cart',{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Basic ' + btoa(`11182204:60-dayfreetrial`)
          },
          body: JSON.stringify({
            id:id
            })
            })
            const data = await response.json()
          }catch(err){
            alert(err)
          }
      router.refresh()
  }

  
  return (
    <div className="flex lg:gap-8 py-2 items-center justify-center  text-sm ">
            <div className="image flex-none bg-gray-200 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-36 my-4"></div>

            <div className="details lg:p-4 p-2  min-w-[400px]">
            <p className="capitalize text-orange-300 font-semibold">
              {item.productId}
            </p>
            <div className="text-sm hidden md:block text-gray-500 lg:leading-6 leading-5 py-1 max-w-xl">
            {item.id}
            </div>
           
            {/* <p className="text-gray-700">$ {item.product.price}</p> */}

            <p className="text-gray-700">quantity : {item.quantity}</p>
          </div>

          <div className="actions flex flex-col-reverse gap-4 items-center justify-center scale-75 origin-center">

          <div className="flex gap-1 my-4">
        <button
          className="text-white bg-gray-700 px-3 rounded-md h-min py-1"
          type="button"
          onClick={addcount}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="text"
          name="value"
          id="value"
          readOnly
          value={count}
          className="text-center p-2 w-6 px-0 text-[.8rem]"
        />
        <button
          type="button"
          className="text-white bg-gray-700 px-[.9rem] rounded-md  h-min py-1"
          onClick={subtractcount}
        >
          -
        </button>
      </div>

            <button className="bg-red-500 text-white px-3 rounded-md py-3 lg:text-lg text-sm" onClick={()=>deleteitem(item.id)}>
                <FaTrash />
            </button>

          </div>
        </div>
  )
}

export default Cartproduct