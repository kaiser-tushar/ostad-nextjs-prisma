let mainShoppingCart = [];
const updateShoppingCart = (shoppingCart) => {
    const shoppingCartContainer = document.getElementById("shoppingCart");
    const totalContainer = document.getElementById("total");
  
    // Clear any existing content
    shoppingCartContainer.innerHTML = "";
    totalContainer.textContent = "";
  
    // Iterate over the shopping cart array and generate HTML for each cart item
    shoppingCart.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("flex", "justify-between", "items-center");
  
      const itemName = document.createElement("p");
      itemName.textContent = item.name;
  
      const itemQuantityContainer = document.createElement("div");
      itemQuantityContainer.classList.add("flex", "items-center", "space-x-2");
  
      const decrementButton = document.createElement("button");
      decrementButton.textContent = "-";
      decrementButton.classList.add(
        "bg-blue-500",
        "hover:bg-blue-600",
        "text-white",
        "px-2",
        "py-1",
        "rounded"
      );
  
      const quantityInput = document.createElement("input");
      quantityInput.classList.add("border", "rounded", "p-1", "w-16");
      quantityInput.type = "number";
      quantityInput.value = item.quantity;
      quantityInput.min = 1;
  
      const incrementButton = document.createElement("button");
      incrementButton.textContent = "+";
      incrementButton.classList.add(
        "bg-blue-500",
        "hover:bg-blue-600",
        "text-white",
        "px-2",
        "py-1",
        "rounded"
      );
  
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `Item Price: $${item.price}`;
  
      // Attach event listeners to the increment and decrement buttons
      incrementButton.addEventListener("click", () => {
        item.quantity++;
        quantityInput.value = item.quantity;
        updateCartTotal(shoppingCart);
        updateShoppingCart(shoppingCart);
      });
  
      decrementButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          quantityInput.value = item.quantity;
          updateCartTotal(shoppingCart);
          updateShoppingCart(shoppingCart);
        }
      });
  
      // Attach event listener to the quantity input
      quantityInput.addEventListener("change", () => {
        const newQuantity = parseInt(quantityInput.value);
        if (newQuantity >= 1) {
          item.quantity = newQuantity;
          updateCartTotal(shoppingCart);
        } else {
          quantityInput.value = item.quantity;
        }
      });
  
      const itemTotal = document.createElement("p");
      itemTotal.textContent = `Total: $${(item.price * item.quantity).toFixed(
        2
      )}`;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add(
        "bg-red-500",
        "hover:bg-red-600",
        "text-white",
        "px-2",
        "py-1",
        "rounded"
      );
      removeButton.addEventListener("click", () => {
        removeItemFromCart(item.id,shoppingCart);
      });
  
      cartItemDiv.appendChild(itemName);
      itemQuantityContainer.appendChild(decrementButton);
      itemQuantityContainer.appendChild(quantityInput);
      itemQuantityContainer.appendChild(incrementButton);
      cartItemDiv.appendChild(itemQuantityContainer);
      cartItemDiv.appendChild(itemPrice);
      cartItemDiv.appendChild(itemTotal);
      cartItemDiv.appendChild(removeButton);
  
      shoppingCartContainer.appendChild(cartItemDiv);
    });
  
    // Calculate and display the total amount
    mainShoppingCart = shoppingCart;
    console.log('mainShoppingCart',mainShoppingCart);
    updateCartTotal(shoppingCart);
  };

  function removeItemFromCart(itemId,shoppingCart) {
    shoppingCart = shoppingCart.filter((item) => item.id !== itemId);
    updateShoppingCart(shoppingCart);
  }
  const updateCartTotal = (shoppingCart) => {
    const totalAmount = shoppingCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    const totalContainer = document.getElementById("total");
    totalContainer.textContent = `Total: $${totalAmount.toFixed(2)}`;
  };

  // clear cart button
  const clearCartButton = document.getElementById("clearCartBtn");
  clearCartButton.addEventListener("click", () => {
    clearCart();
  });

  const clearCart = () => {
    mainShoppingCart = [];
    updateShoppingCart(mainShoppingCart);
  };

  export {
    clearCart,
    updateShoppingCart,
    clearCartButton,
    updateCartTotal,
    removeItemFromCart,
    mainShoppingCart,
  };