// ============================================================
//  JERRY PIZZA — MENU DATA
//  Pakpattan Chowk, Sahiwal
// ============================================================

const MENU_DATA = {

  bestPizzas: [
    {
      name: "Jerry's Special",
      desc: "Edge Filling with Chicken & Cheese, Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Pepperoni Seeds, Special Sauce, Onions, Sweet Corns.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Signature",
      emoji: "🔥"
    },
    {
      name: "Yummy Malai Boti",
      desc: "Edge Filling with Chicken & Sauce, Pizza Sauce, Malai Boti Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Sesame Seeds, Special Sauce, Mushrooms.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Fan Fav",
      emoji: "⭐"
    },
    {
      name: "Behari Kebab",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Kebab, Tomatoes, Capsicum, Black Olives, Special Sauce.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Bestseller",
      emoji: "🥩"
    },
    {
      name: "Bubble Cheese Stuffer",
      desc: "Edge Filled with Cheese, Tikka Chicken, Red Jalapeño, Special Sauce, Cheese, Tomatoes, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Cheesy",
      emoji: "🧀"
    },
    {
      name: "Crispy Crunch",
      desc: "Special Sauce, Crunchy Zinger Chicken, Cheese, Green Jalapeño, Capsicum, Mushroom, Special Sauce Topping.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Crunchy",
      emoji: "💥"
    },
    {
      name: "Cheese & Pepperoni",
      desc: "Special Sauce, Chicken Pepperoni, Cheese, Kebab, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Classic",
      emoji: "🍕"
    }
  ],

  regularPizzas: [
    {
      name: "Chicken Tikka",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    },
    {
      name: "Chicken Fajita",
      desc: "Pizza Sauce, Fajita Chicken, Cheese, Capsicum, Green Jalapeño, Mushrooms, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    },
    {
      name: "Hot & Spicy",
      desc: "Pizza Sauce, Spicy Chicken, Cheese, Capsicum, Red Jalapeño.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    },
    {
      name: "Picklish Tikka",
      desc: "Picklish Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Onions, Black Olives.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    },
    {
      name: "Cheese & Kebab",
      desc: "Special Sauce, Seekh Kebab, Cheese, Black Olives, Capsicum, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    },
    {
      name: "Bar.B.Q Tikka",
      desc: "Pizza Sauce, Seekh Kebab, Tikka Chicken, Cheese, Black Olives, Capsicum.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 }
    }
  ],

  newArrivals: [
    { name: "Special Pizza Pratha", price: 449 },
    { name: "Shawarma Pizza", price: 299 },
    { name: "Delight Shawarma", price: 349 },
    { name: "Square Pizza Large", price: 1899 },
    { name: "Square Pizza Medium", price: 1149 }
  ],

  burgers: [
    { name: "Big Zinger", price: 450 },
    { name: "Junior Zinger", price: 349 },
    { name: "Crispy Crunch Burger", price: 450 },
    { name: "Chicken Reggy", price: 299 },
    { name: "Juicy & Crunchy", price: 599, note: "Add Cheese Slice in Just 50/-" }
  ],

  wrapsAndFries: [
    { name: "Kebab Pratha", price: 319 },
    { name: "Zinger Pratha", price: 299 },
    { name: "Cheese Pratha", price: 349 },
    { name: "Zinger Shawarma", price: 280 },
    { name: "Chicken Shawarma", price: 249 }
  ],

  wingsAndNuggets: [
    { name: "Fried Wings", price5pc: 279, price10pc: 549 },
    { name: "Grilled Wings", price5pc: 309, price10pc: 599 },
    { name: "Saucy Spicy Wings", price5pc: 329, price10pc: 649 },
    { name: "Chicken Nuggets", price5pc: 269, price10pc: 499 }
  ],

  chipsAndDips: [
    { name: "Plane Fries", priceS: 199, priceL: 349 },
    { name: "Matka Fries", priceS: 749, priceL: null },
    { name: "Masala Fries", priceS: 349, priceL: null },
    { name: "Loaded Fries", priceS: 599, priceL: null }
  ],

  sauces: [
    { name: "Garlic Mayo", price: 50 },
    { name: "Picklish Sauce", price: 50 },
    { name: "Special Sauce", price: 50 }
  ],

  pasta: [
    { name: "Cheese Macaroni Pasta", priceHalf: 399, priceFull: 749 },
    { name: "Crunchy Pasta", priceHalf: 449, priceFull: 799 },
    { name: "Chicken Spicy Macaroni", priceHalf: 350, priceFull: 649 }
  ],

  sandwiches: [
    { name: "Chicken Cheese", price: 249 },
    { name: "Chicken Club", price: 219 },
    { name: "Jerry's Special Sandwich", price: 300 },
    { name: "3 Cheese Bread", price: 199 }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream Full", price: 349 },
    { name: "Ice Cream Half", price: 199 },
    { name: "1.5 Liter Drink", price: 220 },
    { name: "1 Liter Drink", price: 170 },
    { name: "500ml Drink", price: 110 },
    { name: "345ml Drink", price: 90 },
    { name: "Regular Drink", price: 80 },
    { name: "Small Water", price: 60 },
    { name: "Large Water", price: 120 }
  ],

  deals: [
    { id: 1, name: "Chicken Tikka Pizza Large + 1 Liter Drink", price: 1399 },
    { id: 2, name: "Jerry Special Pizza Large + 1 Liter Drink", price: 1899 },
    { id: 3, name: "Chicken Tikka Pizza XL + 1.5 Liter Drink", price: 1899 },
    { id: 4, name: "2 Chicken Tikka Pizza Large + 1.5 Liter Drink", price: 2649 },
    { id: 5, name: "2 Chicken Tikka Pizza Small + 1 Liter Drink", price: 1049 },
    { id: 6, name: "Chicken Tikka Pizza Large + 10 Hot Wings + 1 Liter Drink", price: 1849 },
    { id: 7, name: "Jerry Special Pizza Medium + 2 Zinger Burger + 1 Liter Drink", price: 2099 },
    { id: 8, name: "Chicken Tikka Pizza Large + Fajita Pizza Small + 1.5 Liter Drink", price: 1849 },
    { id: 9, name: "Chicken Tikka Pizza Medium + 500ml Drink", price: 1099 },
    { id: 10, name: "Chicken Tikka Pizza Large + 2 Zinger Burger + Large Fries + 1.5 Liter Drink", price: 2449 },
    { id: 11, name: "Chicken Tikka Pizza Small + Zinger Burger + 345ml Drink", price: 949 },
    { id: 12, name: "Junior Zinger Burger + Small Fries + 345ml Drink", price: 559 },
    { id: 13, name: "4 Junior Zinger Burger + 1.5 Liter Drink", price: 1499 },
    { id: 14, name: "2 Junior Zinger Burger + 2 345ml Drink", price: 799 },
    { id: 15, name: "Chicken Tikka Pizza Large + 1 Crunchy Pasta Small + 1 Liter Drink", price: 1749 },
    { id: 16, name: "Chicken Tikka Pizza Small + Macaroni Pasta Small + 345ml Drink", price: 919 },
    { id: 17, name: "Chicken Tikka Pizza Small + 345ml Drink", price: 499 },
    { id: 18, name: "2 Chicken Shawarma + 2 345ml Drink", price: 599 },
    { id: 19, name: "Zinger Pratha / Shawarma + Small Fries + 345ml Drink", price: 499 },
    { id: 20, name: "10 Fried Hot Wings + Junior Zinger Burger + 345ml Drink", price: 929 },
    { id: 21, name: "MUFTA — Large Pizza Any Flavour + 2 Junior Zinger Burger + Macaroni Pasta Small + 5 Nuggets + 1.5 Liter Drink", price: 2699 }
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
  },
  {
    name: "Bubble Cheese Stuffer",
    tagline: "Cheese Lovers, This Is For You",
    desc: "Fully Cheese-Stuffed Crust, Red Jalapeño, Tikka Chicken",
    color: "#e6ac00",
    accent: "#fffbe6",
    img: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&q=80"
  },
  {
    name: "Crispy Crunch",
    tagline: "The Crunchiest Bite in Sahiwal",
    desc: "Crunchy Zinger Chicken, Green Jalapeño, Mushrooms",
    color: "#c0392b",
    accent: "#ffeaa7",
    img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&q=80"
  },
  {
    name: "Behari Kebab",
    tagline: "Old School Flavour, New Level Pizza",
    desc: "Seekh Kebab, Tikka Chicken, Black Olives, Special Sauce",
    color: "#8b1a00",
    accent: "#ffd580",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
  },
  {
    name: "Chicken Fajita",
    tagline: "Bold & Smoky Every Bite",
    desc: "Fajita Chicken, Green Jalapeño, Mushrooms, Capsicum",
    color: "#1a237e",
    accent: "#ffd740",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80"
  }
];