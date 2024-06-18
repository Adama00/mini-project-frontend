import React from 'react'
import Cartproduct from './(components)/Cartproduct'

const page = () => {
  return (
    <main>
         <p className="text-center py-8">
        Products In Cart
      </p>
    <div className="px-2 ">
        <Cartproduct/>
        <Cartproduct/>
        <Cartproduct/>
        <Cartproduct/>
   </div>
</main>
  )
}

export default page