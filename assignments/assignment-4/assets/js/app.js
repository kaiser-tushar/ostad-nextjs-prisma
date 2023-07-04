import products from "./products.js";
import {
  clearCart, updateShoppingCart, clearCartButton, 
  updateCartTotal,removeItemFromCart, mainShoppingCart as shoppingCart
} from "./cart.js";


function renderProductList() {
  const productListContainer = document.getElementById("productList");

  // Clear any existing content
  productListContainer.innerHTML = "";

  // Iterate over the products array and generate HTML for each product
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("bg-white", "p-4", "rounded");

    const productName = document.createElement("h3");
    productName.classList.add("font-bold");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-4",
      "py-2",
      "rounded"
    );
    addToCartButton.textContent = "Add to Cart";

    // Attach event listener to the "Add to Cart" button
    addToCartButton.addEventListener("click", () => {
      const quantityInput = 1;

      if (
        quantityInput &&
        !isNaN(quantityInput) &&
        parseInt(quantityInput) > 0
      ) {
        const quantity = parseInt(quantityInput);

        // Check if the product already exists in the shopping cart
        const existingProduct = shoppingCart.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          // If the product already exists, increase the quantity
          existingProduct.quantity += quantity;
        } else {
          // If the product doesn't exist, add it to the shopping cart
          const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
          };
          shoppingCart.push(cartItem);
        }

        // Call a function to update the display of the shopping cart
        updateShoppingCart(shoppingCart);
      } else {
        alert("Invalid quantity. Please enter a valid quantity.");
      }
    });

    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addToCartButton);

    productListContainer.appendChild(productDiv);
  });
}



// Call the renderProductList function to generate the initial product list
renderProductList();