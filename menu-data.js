// ============================================================
//  JERRY PIZZA — MENU DATA (COMPLETED & UPDATED STRUCTURE)
//  jerrypizza.me | Pakpattan Chowk, Sahiwal
// ============================================================

const MENU_DATA = {

  bestPizzas: [
    {
      name: "Jerry's Special",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Pepperoni Seeds, Special Sauce, Onions, Sweet Corns.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Signature",
      emoji: "🔥",
      img: "assets/jerry-special.png",
      note: "Edge Filling with Chicken & Cheese"
    },
    {
      name: "Yummy Malai Boti",
      desc: "Pizza Sauce, Malai Boti Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Sesame Seeds, Special Sauce, Mushrooms.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Fan Fav",
      emoji: "⭐",
      img: "assets/malai-boti.jpg",
      note: "Edge Filling with Chicken & Sauce"
    },
    {
      name: "Behari Kebab",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Kebab, Tomatoes, Capsicum, Black Olives, Special Sauce.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Bestseller",
      emoji: "🥩",
      img: "assets/behari-kabab.jpg",
      note: "Traditional Behari Spices"
    },
    {
      name: "Bubble Cheese Stuffer",
      desc: "Tikka Chicken, Red Jalapeño, Special Sauce, Cheese, Tomatoes, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Cheesy",
      emoji: "🧀",
      img: "assets/bubble-cheese-stuffer.jpg",
      note: "Edge Filled with Cheese Bubbles"
    },
    {
      name: "Crispy Crunch",
      desc: "Special Sauce, Crunchy Zinger Chicken, Cheese, Green Jalapeño, Capsicum, Mushroom, Special Sauce Topping.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Crunchy",
      emoji: "💥",
      img: "assets/crunchy.jpg",
      note: "Zinger Chicken Topping"
    },
    {
      name: "Cheese & Pepperoni",
      desc: "Special Sauce, Chicken Pepperoni, Cheese, Kebab, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Classic",
      emoji: "🍕",
      img: "assets/creamy.jpg",
      note: "Loaded Pepperoni & Cheese"
    }
  ],

  regularPizzas: [
    {
      name: "Chicken Tikka",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/tikka.jpg",
      note: "Spicy Tikka Chunks"
    },
    {
      name: "Chicken Fajita",
      desc: "Pizza Sauce, Fajita Chicken, Cheese, Capsicum, Green Jalapeño, Mushrooms, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/fajita.jpg",
      note: "Mild & Savory"
    },
    {
      name: "Hot & Spicy",
      desc: "Pizza Sauce, Spicy Chicken, Cheese, Capsicum, Red Jalapeño.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/hot.jpg",
      note: "For Spice Lovers"
    },
    {
      name: "Picklish Tikka",
      desc: "Picklish Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Onions, Black Olives.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/pick-tikka.jpg",
      note: "Tangy Achaari Flavor"
    },
    {
      name: "Cheese & Kebab",
      desc: "Special Sauce, Seekh Kebab, Cheese, Black Olives, Capsicum, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/cheese-kebab.jpg",
      note: "Double Cheese & Kebab"
    },
    {
      name: "Bar.B.Q Tikka",
      desc: "Pizza Sauce, Seekh Kebab, Tikka Chicken, Cheese, Black Olives, Capsicum.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/bbq.jpg",
      note: "Smoky BBQ Topping"
    }
  ],

  newArrivals: [
    { 
      name: "Square Pizza", 
      desc: "The unique Jerry's style deep-pan square pizza.",
      sizes: { M: 1149, L: 1899 }, 
      img: "assets/squarelarge.jpg",
      note: "Signature Square Shape"
    },
    { name: "Special Pizza Pratha", price: 449, img: "assets/pizzapar.jpg", desc: "Fusion of Pizza & Crispy Pratha" },
    { name: "Shawarma Pizza", price: 299, img: "assets/shawarmapizza.jpg", desc: "Classic Pizza with Shawarma flavor" },
    { name: "Delight Shawarma", price: 349, img: "assets/delight.jpg", desc: "Jerry's Special Creamy Shawarma" }
  ],

  burgers: [
    { name: "Big Zinger", price: 450, img: "assets/big-burger.jpg", desc: "Large Crispy Chicken Fillet" },
    { name: "Junior Zinger", price: 349, img: "assets/junior.jpg", desc: "Standard Crispy Chicken Fillet" },
    { name: "Crispy Crunch Burger", price: 450, img: "assets/crunchcrispy.jpg", desc: "Extra Crunchy Layering" },
    { name: "Chicken Reggy", price: 299, img: "assets/chickenreggy.jpg", desc: "Regular Chicken Burger" },
    { 
      name: "Juicy & Crunchy", 
      price: 599, 
      img: "assets/juicy.jpg", 
      desc: "Our most premium tender burger",
      note: "Add Cheese Slice in Just 50/-" 
    }
  ],

  wrapsAndFries: [
    { name: "Kebab Pratha", price: 319, img: "assets/kabab-paratha.jpg", desc: "Seekh Kebab wrapped in Pratha" },
    { name: "Zinger Pratha", price: 299, img: "assets/zinger-roll.jpg", desc: "Zinger Chunks in Crispy Pratha" },
    { name: "Cheese Pratha", price: 349, img: "assets/cheese-paratha.jpg", desc: "Melted Cheese & Chicken Pratha" },
    { name: "Zinger Shawarma", price: 280, img: "assets/zinger-shawarma.jpg", desc: "Crispy Zinger Shawarma Roll" },
    { name: "Chicken Shawarma", price: 249, img: "assets/chiken-shawarma.jpg", desc: "Classic Chicken Shawarma Roll" }
  ],

  wingsAndNuggets: [
    { name: "Fried Wings", sizes: { "5pc": 279, "10pc": 549 }, img: "assets/frieswings.jpg", desc: "Crispy Deep Fried" },
    { name: "Grilled Wings", sizes: { "5pc": 309, "10pc": 599 }, img: "assets/grilledwings.jpg", desc: "BBQ Grilled" },
    { name: "Saucy Spicy Wings", sizes: { "5pc": 329, "10pc": 649 }, img: "assets/saucywings.jpg", desc: "Dipped in Spicy Sauce" },
    { name: "Chicken Nuggets", sizes: { "5pc": 269, "10pc": 499 }, img: "assets/nuggets.jpg", desc: "Golden Nuggets" }
  ],

  chipsAndDips: [
    { name: "Plane Fries", sizes: { S: 199, L: 349 }, img: "assets/planefries.jpg", desc: "Salted Golden Fries" },
    { name: "Matka Fries", sizes: { S: 749 }, img: "assets/matkafries.jpg", desc: "Loaded in Traditional Clay Pot", note: "Special Jerry Sauce" },
    { name: "Masala Fries", sizes: { S: 349 }, img: "assets/masala.jpg", desc: "Spiced with Jerry Masala" },
    { name: "Loaded Fries", sizes: { S: 599 }, img: "assets/loadedfries.jpg", desc: "Cheese & Chicken Loaded" }
  ],

  pasta: [
    { name: "Cheese Macaroni Pasta", sizes: { Half: 399, Full: 749 }, img: "assets/cheese-pasta.jpg", desc: "Extra Cheesy Macaroni" },
    { name: "Crunchy Pasta", sizes: { Half: 449, Full: 799 }, img: "assets/crunchy-pasta.jpg", desc: "Zinger Chicken Topped Pasta" },
    { name: "Chicken Spicy Macaroni", sizes: { Half: 350, Full: 649 }, img: "assets/spicy-pasta.jpg", desc: "Spicy Pasta Mix" }
  ],

  sandwiches: [
    { name: "Chicken Cheese", price: 249, img: "assets/sand-cheese.jpg", desc: "Toasted Cheese Sandwich" },
    { name: "Chicken Club", price: 219, img: "assets/sand-club.jpg", desc: "Classic Club layers" },
    { name: "Jerry's Special Sandwich", price: 300, img: "assets/sand-jerry.jpg", desc: "Our Signature Toasted Sandwich" },
    { name: "3 Cheese Bread", price: 199, img: "assets/sand-3.jpg", desc: "Triple Cheese Layered Bread" }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream", sizes: { Half: 199, Full: 349 }, img: "assets/full.jpg" },
    { name: "Soft Drink 1.5 L", price: 220, img: "assets/1.5l.jpg" },
    { name: "Soft Drink 1 L", price: 170, img: "assets/1l.jpg" },
    { name: "Soft Drink 500ml", price: 110, img: "assets/500ml.jpg" },
    { name: "Soft Drink 345ml", price: 90, img: "assets/345ml.jpg" },
    { name: "Regular Drink", price: 80, img: "assets/regular.jpg" },
    { name: "Mineral Water", sizes: { S: 60, L: 120 }, img: "assets/small-water.jpg" }
  ],

  desserts: [
    { name: "Pineapple Cake", sizes: { "1 lb": 600, "2 lb": 1100 }, img: "assets/1lb.jpg", desc: "Fresh & Creamy" },
    { name: "Chocolate Cake", sizes: { "1 lb": 700, "2 lb": 1300 }, img: "assets/ch1lb.jpg", desc: "Rich & Fudgy" }
  ],

  sauces: [
    { name: "Garlic Mayo", price: 50, img: "assets/garlicmayo.jpg" },
    { name: "Picklish Sauce", price: 50, img: "assets/picklish.jpg" },
    { name: "Special Sauce", price: 50, img: "assets/specialsauce.jpg" }
  ],

  deals: [
    { id: 1,  name: "Deal 1",     price: 1399, desc: "1 Large Chicken Tikka Pizza + 1 Liter Drink.", img: "assets/deal1.jpg" },
    { id: 2,  name: "Deal 2",     price: 1899, desc: "1 Large Jerry Special Pizza + 1 Liter Drink.", img: "assets/deal2.jpg" },
    { id: 3,  name: "Deal 3",     price: 1899, desc: "1 XL Chicken Tikka Pizza + 1.5 Liter Drink.", img: "assets/deal3.jpg" },
    { id: 4,  name: "Deal 4",     price: 2649, desc: "2 Large Chicken Tikka Pizzas + 1.5 Liter Drink.", img: "assets/deal4.jpg" },
    { id: 5,  name: "Deal 5",     price: 1049, desc: "2 Small Chicken Tikka Pizzas + 1 Liter Drink.", img: "assets/deal5.jpg" },
    { id: 6,  name: "Deal 6",     price: 1849, desc: "1 Large Chicken Tikka Pizza + 10 Hot Wings + 1 Liter Drink.", img: "assets/deal6.jpg" },
    { id: 7,  name: "Deal 7",     price: 2099, desc: "1 Medium Jerry Special + 2 Zinger Burgers + 1 Liter Drink.", img: "assets/deal7.jpg" },
    { id: 8,  name: "Deal 8",     price: 1849, desc: "1 Large Chicken Tikka + 1 Small Fajita Pizza + 1.5 Liter Drink.", img: "assets/deal8.jpg" },
    { id: 9,  name: "Deal 9",     price: 1099, desc: "1 Medium Chicken Tikka Pizza + 500ml Drink.", img: "assets/deal9.jpg" },
    { id: 10, name: "Deal 10",    price: 2449, desc: "1 Large Chicken Tikka + 2 Zinger Burgers + Large Fries + 1.5 L Drink.", img: "assets/deal10.jpg" },
    { id: 11, name: "Deal 11",    price: 949,  desc: "1 Small Chicken Tikka + 1 Zinger Burger + 345ml Drink.", img: "assets/deal11.jpg" },
    { id: 12, name: "Deal 12",    price: 559,  desc: "1 Junior Zinger Burger + Small Fries + 345ml Drink.", img: "assets/deal12.jpg" },
    { id: 13, name: "Deal 13",    price: 1499, desc: "4 Junior Zinger Burgers + 1.5 Liter Drink.", img: "assets/deal13.jpg" },
    { id: 14, name: "Deal 14",    price: 799,  desc: "2 Junior Zinger Burgers + Two 345ml Drinks.", img: "assets/deal14.jpg" },
    { id: 15, name: "Deal 15",    price: 1749, desc: "1 Large Chicken Tikka + 1 Small Crunchy Pasta + 1 Liter Drink.", img: "assets/deal15.jpg" },
    { id: 16, name: "Deal 16",    price: 919,  desc: "1 Small Chicken Tikka + 1 Small Macaroni Pasta + 345ml Drink.", img: "assets/deal16.jpg" },
    { id: 17, name: "Deal 17",    price: 499,  desc: "1 Small Chicken Tikka Pizza + 345ml Drink.", img: "assets/deal17.jpg" },
    { id: 18, name: "Deal 18",    price: 599,  desc: "2 Chicken Shawarmas + Two 345ml Drinks.", img: "assets/deal18.jpg" },
    { id: 19, name: "Deal 19",    price: 499,  desc: "1 Zinger Pratha or Shawarma + Small Fries + 345ml Drink.", img: "assets/deal19.jpg" },
    { id: 20, name: "Deal 20",    price: 929,  desc: "10 Fried Hot Wings + 1 Junior Zinger Burger + 345ml Drink.", img: "assets/deal20.jpg" },
    { id: 21, name: "MUFTA DEAL", price: 2699, desc: "1 Large Pizza + 2 Junior Zinger Burgers + Small Macaroni + 5 Nuggets + 1.5 L Drink.", img: "assets/deal21.jpg" }
  ]
};
