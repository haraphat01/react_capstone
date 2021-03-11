const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const api = () => fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

export default api;
