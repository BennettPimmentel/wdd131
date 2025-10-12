const products = [
  {
    name: "Strawberry Bread",
    flavor: "Strawberry",
    price: "$8",
    image: "images/strawberry.jpg"
  },
  {
    name: "Banana Bread",
    flavor: "Banana",
    price: "$7",
    image: "images/banana.jpg"
  },
  {
    name: "Blueberry Bread",
    flavor: "Blueberry",
    price: "$9",
    image: "images/blueberry.jpg"
  },
  {
    name: "Apple Cinnamon Bread",
    flavor: "Apple & Cinnamon",
    price: "$8",
    image: "images/Apple.webp"
  }
];

const productList = document.getElementById("productList");

products.forEach((bread) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${bread.image}" alt="${bread.name}" />
    <h4>${bread.name}</h4>
    <p><strong>Flavor:</strong> ${bread.flavor}</p>
    <p><strong>Price:</strong> ${bread.price}</p>
    <button>Add to Favorites</button>
  `;

  productList.appendChild(card);
});

document.getElementById("exploreBtn").addEventListener("click", () => {
  window.scrollTo({
    top: productList.offsetTop,
    behavior: "smooth"
  });
});
