export function getHistory() {
  const result = window.localStorage.getItem('avk-w-app-search-history')
  if (result === null) return result
  return JSON.parse(result)
}