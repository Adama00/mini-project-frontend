import Product from "./components/Product";

//Fetching data or all products here
const getproducts = async () =>{
  let res = await fetch("http://adamasenam-001-site1.ctempurl.com/api/products",{cache : "no-store"})

  if(!(res.ok)){
    return undefined
  }
  
  let data = await res.json()
  return data
}

export default async function Home() {


  let products =await getproducts()

  return (
    <main>
      <div className=" py-16 flex justify-between">
      <p className="text-center">
        All Products In Store
      </p>

      </div>
      <div className="grid grid-cols-4 gap-8">
       {products  && products.map((product:product)=><Product key={product.id} product={product}/>)}
      </div>
    </main>
  );
}
