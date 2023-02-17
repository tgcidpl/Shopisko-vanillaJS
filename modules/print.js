export default function Print (productsURL) {

  fetch(productsURL, {
    method: 'GET',
  }).then(response => {
    if(response.ok){
      return response.json();  
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    console.log(Object.entries(jsonResponse))
    })
  
}
