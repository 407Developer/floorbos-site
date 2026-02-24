import { addToCart } from "../lib/cart.js";

function updateCartButtons() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const ids = new Set(cart.map((item) => item.id));
  document
    .querySelectorAll("button[data-product-id]")
    .forEach((button) => {
      const id = parseInt(button.dataset.productId);
      if (ids.has(id)) {
        button.textContent = "In Cart";
        button.classList.add("opacity-90");
      } else {
        button.textContent = "Add to Cart";
        button.classList.remove("opacity-90");
      }
    });
}

function initPage() {
  // Add to cart logic (event delegation)
  if (!window.__cartListenerAttached) {
    document.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-product-id]");
      if (!button) return;

      event.preventDefault();
      const id = parseInt(button.dataset.productId);
      const name = button.dataset.productName;
      const price = parseFloat(button.dataset.productPrice);
      const image = button.dataset.productImage;
      addToCart(id, name, price, image);
      updateCartButtons();
    });
    window.__cartListenerAttached = true;
  }

  // Mobile menu toggle logic
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton && mobileMenu && !mobileMenuButton.dataset.bound) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        mobileMenu.classList.contains("hidden") ||
        mobileMenuButton.contains(event.target) ||
        mobileMenu.contains(event.target)
      ) {
        return;
      }
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });

    mobileMenuButton.dataset.bound = "true";
  }

  updateCartButtons();
}

// Run on initial page load and also after client-side navigation
window.addEventListener("DOMContentLoaded", initPage);
document.addEventListener("astro:after-swap", initPage);
