// ============================================================
//  JERRY PIZZA — MENU DATA
//  jerrypizza.me | Pakpattan Chowk, Sahiwal
// ============================================================

const MENU_DATA = {

  bestPizzas: [
    {
      name: "Jerry's Special",
      desc: "Edge Filling with Chicken & Cheese, Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Pepperoni Seeds, Special Sauce, Onions, Sweet Corns.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Signature",
      emoji: "🔥",
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80"
    },
    {
      name: "Yummy Malai Boti",
      desc: "Edge Filling with Chicken & Sauce, Pizza Sauce, Malai Boti Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Sesame Seeds, Special Sauce, Mushrooms.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Fan Fav",
      emoji: "⭐",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
    },
    {
      name: "Behari Kebab",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Kebab, Tomatoes, Capsicum, Black Olives, Special Sauce.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Bestseller",
      emoji: "🥩",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"
    },
    {
      name: "Bubble Cheese Stuffer",
      desc: "Edge Filled with Cheese, Tikka Chicken, Red Jalapeño, Special Sauce, Cheese, Tomatoes, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Cheesy",
      emoji: "🧀",
      img: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&q=80"
    },
    {
      name: "Crispy Crunch",
      desc: "Special Sauce, Crunchy Zinger Chicken, Cheese, Green Jalapeño, Capsicum, Mushroom, Special Sauce Topping.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Crunchy",
      emoji: "💥",
      img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=80"
    },
    {
      name: "Cheese & Pepperoni",
      desc: "Special Sauce, Chicken Pepperoni, Cheese, Kebab, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Classic",
      emoji: "🍕",
      img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80"
    }
  ],

  regularPizzas: [
    {
      name: "Chicken Tikka",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80"
    },
    {
      name: "Chicken Fajita",
      desc: "Pizza Sauce, Fajita Chicken, Cheese, Capsicum, Green Jalapeño, Mushrooms, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80"
    }
  ],

  newArrivals: [
    { name: "Special Pizza Pratha", price: 449, img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80" },
    { name: "Shawarma Pizza", price: 299, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80" }
  ],

  burgers: [
    { name: "Big Zinger", price: 450, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { name: "Junior Zinger", price: 349, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" }
  ],

  wrapsAndFries: [
    { name: "Kebab Pratha", price: 319, img: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=500&q=80" },
    { name: "Zinger Pratha", price: 299, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80" }
  ],

  wingsAndNuggets: [
    { name: "Fried Wings", price5pc: 279, price10pc: 549, img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&q=80" },
    { name: "Grilled Wings", price5pc: 309, price10pc: 599, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80" }
  ],

  pasta: [
    { name: "Cheese Macaroni Pasta", priceHalf: 399, priceFull: 749, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80" },
    { name: "Crunchy Pasta", priceHalf: 449, priceFull: 799, img: "https://images.unsplash.com/photo-1612182275002-8a23c7d6c0d6?w=500&q=80" }
  ],

  sandwiches: [
    { name: "Chicken Cheese", price: 249, img: "https://images.unsplash.com/photo-1509722747041-616f39b57232?w=500&q=80" },
    { name: "Chicken Club", price: 219, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80" }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream Full", price: 349, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80" },
    { name: "1.5 Liter Drink", price: 220, img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500&q=80" },
    { name: "1 Liter Drink", price: 170, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" }
  ],

  desserts: [
    { name: "Pineapple Cake (1 lb)", price: 600, desc: "Fresh and creamy pineapple cake.", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80" },
    { name: "Chocolate Cake (1 lb)", price: 700, desc: "Rich, fudgy double chocolate cake.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80" }
  ],

  deals: [
    { id: 1,  name: "Deal 1",     price: 1399, desc: "1 Large Chicken Tikka Pizza + 1 Liter Drink.",                                                                img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80" },
    { id: 2,  name: "Deal 2",     price: 1899, desc: "1 Large Jerry Special Pizza + 1 Liter Drink.",                                                               img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { id: 3,  name: "Deal 3",     price: 1899, desc: "1 XL Chicken Tikka Pizza + 1.5 Liter Drink.",                                                                img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
    { id: 4,  name: "Deal 4",     price: 2649, desc: "2 Large Chicken Tikka Pizzas + 1.5 Liter Drink.",                                                            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
    { id: 5,  name: "Deal 5",     price: 1049, desc: "2 Small Chicken Tikka Pizzas + 1 Liter Drink.",                                                              img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80" },
    { id: 6,  name: "Deal 6",     price: 1849, desc: "1 Large Chicken Tikka Pizza + 10 Hot Wings + 1 Liter Drink.",                                                img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
    { id: 7,  name: "Deal 7",     price: 2099, desc: "1 Medium Jerry Special + 2 Zinger Burgers + 1 Liter Drink.",                                                 img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: 8,  name: "Deal 8",     price: 1849, desc: "1 Large Chicken Tikka + 1 Small Fajita Pizza + 1.5 Liter Drink.",                                            img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" }
  ]
};

// Slider pizza data for hero section
const PIZZA_SLIDES = [
  {
    name: "Jerry's Special",
    tagline: "The Ultimate Signature Pizza",
    desc: "Cheese-stuffed edges, Tikka Chicken, Sweet Corn, Special Sauce",
    color: "#ff2d00",
    accent: "#ffd700",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
  },
  {
    name: "Yummy Malai Boti",
    tagline: "Creamy, Juicy & Unforgettable",
    desc: "Malai Boti Chicken, Mushrooms, Sesame Seeds, Stuffed Edges",
    color: "#ff6b00",
    accent: "#fff3e0",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
  }
];
