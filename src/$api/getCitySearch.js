export async function getCitySearch(value) {
  const response = await (
    await fetch(`https://nominatim.openstreetmap.org/search.php?q=${value}&format=json&addressdetails=1&limit=1`)
  ).json();

  return response
}