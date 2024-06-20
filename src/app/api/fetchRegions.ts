export const fetchRegions = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Regions`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`)
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch regions');
  }
  return response.json();
}
