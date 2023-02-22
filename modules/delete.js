const deleteBtn = document.getElementById(`delete`)
let productsListItems = document.getElementsByClassName(`products-box-list-item`)

function getCheckedProductsIDs(productsListItems) {
  let getCheckedProductsIDs = [];
  for (let i=0; i<productsListItems.length; i++) {
     if (productsListItems[i].lastChild.checked === true) {
      getCheckedProductsIDs.push(productsListItems[i].firstChild.innerHTML);
     }
  }
  return getCheckedProductsIDs.length > 0 ? console.log(`getCheckedProductsIDs:`, getCheckedProductsIDs)  : null;
}

export default function Delete () {
  function handleDelete (){
    console.log(`delete test`)
    console.log(`productsListItems:`, productsListItems)
    getCheckedProductsIDs(productsListItems)
  }
  deleteBtn.addEventListener("click", handleDelete)
}