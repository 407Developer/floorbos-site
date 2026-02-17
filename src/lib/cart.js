let toastTimeout;

export function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const body = document.body;

  if (toast) {
    toast.textContent = message;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");
    body.classList.add("glowing-border");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 3000); // Hide after 3 seconds
  }
}

export function hideToast() {
  const toast = document.getElementById("toast-notification");
  const body = document.body;
  if (toast) {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
    body.classList.remove("glowing-border");
  }
}

export function addToCart(id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = cart.find((item) => item.id === id);

  if (product) {
    product.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${name} added to cart!`);
}
