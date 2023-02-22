const deleteBtn = document.getElementById(`delete`)
let productsListItems = document.getElementsByClassName(`products-box-list-item`)

export default function Delete () {
  function handleDelete (){
    console.log(`delete test`)
    console.log(`productsListItems:`, productsListItems)
  }
  deleteBtn.addEventListener("click", handleDelete)
}