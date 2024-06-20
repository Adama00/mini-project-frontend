export const getCart = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
}
