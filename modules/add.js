export default function Add(productsURL) {
  const addBtn = document.getElementById("add");
  const name = document.getElementById("name");
  const brand = document.getElementById("brand");
  const price = document.getElementById("price");
  const quantity = document.getElementById("quantity");
  const image = document.getElementById("image");

  function handleAdd() {
    fetch(`${productsURL}.json`, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        brand: brand.value,
        price: +price.value,
        quantity: quantity.value,
        image: image.value,
      }),
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        console.log(`added item:`, jsonResponse);
        location.reload();
      });
    // .then(location.reload());
  }

  addBtn.addEventListener("click", handleAdd);
}
