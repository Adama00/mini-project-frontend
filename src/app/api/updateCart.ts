interface UpdateCartProps {
  id: number;
  quantity: number;
}

export const updateCart = async ({ id, quantity }: UpdateCartProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    },
    body: JSON.stringify({ quantity })
  });
  if (!response.ok) {
    throw new Error('Failed to update cart');
  }
  return response.json();
}
