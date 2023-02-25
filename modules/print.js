const productsPrint = document.getElementById("products-print");

export default function Print(productsURL) {
  fetch(`${productsURL}.json`, {
    method: "GET",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(`network error!:`, networkError.message);
      }
    )
    .then((jsonResponse) => {
      if (jsonResponse === null) {
        return noProducts();
      }
      const products = Object.entries(jsonResponse);
      renderProducts(products);
    });
}
//TODO can change noProducts to add a default product if empty
function noProducts() {
  const noProductsAlert = document.createElement(`p`);
  noProductsAlert.textContent = `No products, please add a product.`;
  productsPrint.appendChild(noProductsAlert);
  return;
}

function renderProducts(products) {
  products.forEach((product) => {
    productsPrint.innerHTML += `<li class="products-list-item"><span style="display:none">${product[0]}</span>
          <div class="products-list-item-image">
            <img src="${product[1]["image"]}" alt="item-photo">
              </div>
          <div class="products-list-item-name">
            <h2>${product[1]["name"]}</h2>
            <h2"><small>$</small>${product[1]["price"]}</h2>
            <p>Brand: ${product[1]["brand"]}</p>
            <p>Quantity: ${product[1]["quantity"]}</p>
          </div>
          <input type="checkbox" name="checkbox" class="checkbox"></input></li>`;
  });
}
