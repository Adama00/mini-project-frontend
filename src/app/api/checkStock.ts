export const checkStock = async (id: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Stock/${id}`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    }
  });
  if (!response.ok) {
    throw new Error('Failed to check stock');
  }
  return response.json();
}
