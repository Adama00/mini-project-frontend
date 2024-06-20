export const deleteFromCart = async (id: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Cart/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    }
  });
  if (!response.ok) {
    throw new Error('Failed to delete product from cart');
  }
  return response.json();
}
