// Write your code here
// Declare the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Add a new product to the array
function addProduct(productName) {
  products.push(productName);
}

// Update the name of a product at a given index
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  }
}

// Remove the last product from the array
function removeLastProduct() {
  products.pop();
}

// ✅ Final and only export statement
module.exports = {
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products
};