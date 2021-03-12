// import Body from '../containers/Body'
const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
// const api = async () => {
//     const response = await axios.get(url)
//     setBooks(response.data)

// export default api;

function api() {
  return fetch(url)
    .then(data => data.json());
}
export default api;
