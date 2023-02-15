import Hello from "./utils/hello.js";

Hello("Bob")
const addBtn = document.getElementById('add')
const name = document.getElementById('name')
const brand = document.getElementById('brand')
const price = document.getElementById('price')

function handleAdd () {

fetch('https://shopisko-98e58-default-rtdb.firebaseio.com/products.json', {
  method: 'POST',
  body: JSON.stringify({name: name.value, brand: brand.value, price: +price.value})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})
}



addBtn.addEventListener("click", handleAdd)
