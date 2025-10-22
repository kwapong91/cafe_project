document.getElementById("subscribeBtn")?.addEventListener("click", () => {
  const email = prompt("Enter your email to subscribe:");
  if (email) {
    alert("Thank you for subscribing, " + email + "!");
    localStorage.setItem("subscriberEmail", email);
  }
});

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.previousElementSibling.textContent;
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} added to your cart!`);
  });
});

function showCart() {
  const cartList = document.getElementById("cartList");
  if (cartList) {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }
}
showCart();

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll respond soon.");
  e.target.reset();
});

document.getElementById("customForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const drinkType = document.getElementById("drinkType").value;
  const size = document.getElementById("size").value;
  sessionStorage.setItem("customOrder", JSON.stringify({ drinkType, size }));
  alert(`Custom Order Saved: ${drinkType} (${size})`);
  e.target.reset();
});
