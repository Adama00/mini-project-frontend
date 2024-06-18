type product = {
    id: number,
    name: string,
    price: number,
    description: string,
    quantity: number,
    categories_id: number,
    created_at: string,
    updated_at: string
  }

type createproduct = {
    name?: string,
    price?: number,
    description?: string,
    quantity?: number,
    categories_id?: number,
    region? : number
  }

  type producterrors = {
    name?: string,
    price?: string,
    description?: string,
    quantity?: string,
    categories_id?: string,
    region? : string
  }