import Add from "./modules/add.js";
import Delete from "./modules/delete.js";
import Print from "./modules/print.js";

const productsURL = 'https://shopisko-98e58-default-rtdb.firebaseio.com/products.json'

Add(productsURL);
Print(productsURL);
Delete();
