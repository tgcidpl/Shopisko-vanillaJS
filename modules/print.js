export default function Print(productsURL) {
  fetch(productsURL, {
    method: 'GET',
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message);
    })
    .then(jsonResponse => {
      const products = Object.entries(jsonResponse);
      const productList = renderProducts(products);
      document.body.appendChild(productList);
    });
}

function renderProducts(products) {
  const productList = document.createElement('ul');

  products.forEach(product => {
    const listItem = document.createElement('li');
    const name = document.createElement('h2');
    const brand = document.createElement('p');
    const price = document.createElement('p');

    name.textContent = product[1]['name'];
    brand.textContent = `Brand: ${product[1]['brand']}`;
    price.textContent = `Price: $${product[1]['price']}`;

    listItem.appendChild(name);
    listItem.appendChild(brand);
    listItem.appendChild(price);
    productList.appendChild(listItem);
  });

  return productList;
}