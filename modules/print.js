const productsPrint = document.getElementById('products-print')

export default function Print(productsURL) {
  fetch(`${productsURL}.json`, {
    method: 'GET',
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(`network error!:`, networkError.message);
    })
    .then(jsonResponse => {
      if (jsonResponse === null) {
        return noProducts()
      }
      const products = Object.entries(jsonResponse);
      const productList = renderProducts(products);
      productsPrint.appendChild(productList);
    });
}

function noProducts(){
  const noProductsAlert = document.createElement(`p`);
  noProductsAlert.textContent = `No products, please add a product.`;
  productsPrint.appendChild(noProductsAlert);
  return
}

function renderProducts(products) {

  const productList = document.createElement('ul');
  productList.classList.add('products-box-list')

  products.forEach(product => {
    const id = document.createElement('span');
    const listItem = document.createElement('li');
    const name = document.createElement('h2');
    const brand = document.createElement('p');
    const price = document.createElement('p');
    const quantity = document.createElement('p');
    const checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.className = "checkbox";

    name.textContent = product[1]['name'];
    brand.textContent = `Brand: ${product[1]['brand']}`;
    price.textContent = `Price: $${product[1]['price']}`;
    quantity.textContent = `Quantity: ${product[1]['quantity']}`;
    id.textContent = product[0];
    id.style.display = 'none';

    listItem.appendChild(id);
    listItem.appendChild(name);
    listItem.appendChild(brand);
    listItem.appendChild(price);
    listItem.appendChild(quantity);
    listItem.appendChild(checkbox);


    listItem.classList.add('products-box-list-item')

    productList.appendChild(listItem);
  });
  return productList;
}