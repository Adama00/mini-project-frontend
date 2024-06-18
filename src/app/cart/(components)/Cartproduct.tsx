import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Cartproduct = () => {
  return (
    <div className="flex lg:gap-8 py-2 items-center justify-between lg:justify-center  text-sm ">
            <div className="image flex-none bg-gray-200 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-36 my-4"></div>

            <div className="details lg:p-4 p-2">
            <p className="capitalize text-orange-300 font-semibold">
              Product name
            </p>
            <div className="text-sm hidden md:block text-gray-500 lg:leading-6 leading-5 py-1 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime consectetur 
            </div>
           
            <p className="text-gray-700">$20.00</p>
          </div>

          <div className="actions flex flex-col-reverse gap-4 items-center justify-center scale-75 origin-center">
            <button className="bg-red-500 text-white px-3 rounded-md py-3 lg:text-lg text-sm">
                <FaTrash />
            </button>

            <div className="flex gap-1 my-4">
                <button className="text-white bg-gray-300 px-4"> - </button>
                <input type="text" name="value" id="value" value={1}  className="text-center p-2 w-8 px-0"  />
                <button className="text-white bg-gray-300 px-4" defaultValue={1}> + </button>
            </div>
          </div>
        </div>
  )
}

export default Cartproduct