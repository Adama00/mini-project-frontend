export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Products`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}
