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

// Export all functions and the array for testing
module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
