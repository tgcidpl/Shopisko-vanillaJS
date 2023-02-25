const deleteBtn = document.getElementById(`delete`)
let productsListItems = document.getElementsByClassName(`products-list-item`)

export default function Delete (productsURL) {
  
  function getCheckedProductsIDs(productsListItems) {
    let checkedProductsIDs = [];
    for (let i=0; i<productsListItems.length; i++) {
        if (productsListItems[i].lastChild.checked === true) {
        checkedProductsIDs.push(productsListItems[i].firstChild.innerHTML);
        }
    }
    return checkedProductsIDs;
  }

  function handleDelete (){
    let foo = getCheckedProductsIDs(productsListItems)

    // below loops through every ID checked for deletion and requests DELETE from API

    for (let i=0; i < foo.length; i++) {
      let id = foo[i]
    fetch(`${productsURL}/${id}.json`, {
      method: 'DELETE',
    }).then(response => {
      if(response.ok){
        return location.reload()
      }
      throw new Error('delete failed!');
    }, networkError => {
      console.log(`network error:`, networkError.message);
    })
  }

}
  
  deleteBtn.addEventListener("click", handleDelete)
}