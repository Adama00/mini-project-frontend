type product = {
    id: number,
    name: string,
    price: number,
    description: string,
    stockQuantity: number,
    categoryId: number,
    // created_at: string,
    // updated_at: string
  }

type createproduct = {
    name?: string,
    price?: number,
    description?: string,
    stockQuantity?: number,
    categoryId?: number,
    regionId? : number
  }

  type producterrors = {
    
    name?: string,
    price?: string,
    description?: string,
    stockQuantity?: string,
    categoryId?: string,
    regionId? : string
  }

  type cartitem = {
    id: number, 
    productId: number,
    quantity?: number,
    product: {
      id: number,
      name: string,
      description: string,
      price: number,
      stockQuantity: number,
      regionId: number,
      categoryId: number,
     
    }
  }

  type category = {id:number,name:"string"}

  type region = {id:number,name:"string"}