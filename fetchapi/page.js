const getApidata = async () => {
    const data= await fetch("https://jsonplaceholder.typicode.com/users")
  return data.json();
}
export default getApidata