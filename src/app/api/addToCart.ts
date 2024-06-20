interface AddToCartProps {
  productId: number;
  quantity: number;
}

export const addToCart = async ({ productId, quantity }: AddToCartProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    },
    body: JSON.stringify({ productId, quantity })
  });
  if (!response.ok) {
    throw new Error('Failed to add product to cart');
  }
  return response.json();
}
