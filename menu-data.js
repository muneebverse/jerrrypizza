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
      img: "assets/jerry-special.png"
    },
    {
      name: "Yummy Malai Boti",
      desc: "Edge Filling with Chicken & Sauce, Pizza Sauce, Malai Boti Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Sesame Seeds, Special Sauce, Mushrooms.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Fan Fav",
      emoji: "⭐",
      img: "assets/yummy-malai-boti.png"
    },
    {
      name: "Behari Kebab",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Kebab, Tomatoes, Capsicum, Black Olives, Special Sauce.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Bestseller",
      emoji: "🥩",
      img: "assets/behari-kebab.png"
    },
    {
      name: "Bubble Cheese Stuffer",
      desc: "Edge Filled with Cheese, Tikka Chicken, Red Jalapeño, Special Sauce, Cheese, Tomatoes, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Cheesy",
      emoji: "🧀",
      img: "assets/bubble-cheese-stuffer.png"
    },
    {
      name: "Crispy Crunch",
      desc: "Special Sauce, Crunchy Zinger Chicken, Cheese, Green Jalapeño, Capsicum, Mushroom, Special Sauce Topping.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Crunchy",
      emoji: "💥",
      img: "assets/crispy-crunch.png"
    },
    {
      name: "Cheese & Pepperoni",
      desc: "Special Sauce, Chicken Pepperoni, Cheese, Kebab, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Classic",
      emoji: "🍕",
      img: "assets/cheese-pepperoni.png"
    }
  ],

  regularPizzas: [
    {
      name: "Chicken Tikka",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/chicken-tikka.png"
    },
    {
      name: "Chicken Fajita",
      desc: "Pizza Sauce, Fajita Chicken, Cheese, Capsicum, Green Jalapeño, Mushrooms, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/chicken-fajita.jpg"
    },
    {
      name: "Hot & Spicy",
      desc: "Pizza Sauce, Spicy Chicken, Cheese, Capsicum, Red Jalapeño.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/hot.jpg"
    },
    {
      name: "Picklish Tikka",
      desc: "Picklish Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Onions, Black Olives.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/pick-tikka.png"
    },
    {
      name: "Cheese & Kebab",
      desc: "Special Sauce, Seekh Kebab, Cheese, Black Olives, Capsicum, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/cheese-kebab.jpg"
    },
    {
      name: "Bar.B.Q Tikka",
      desc: "Pizza Sauce, Seekh Kebab, Tikka Chicken, Cheese, Black Olives, Capsicum.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/bbq.jpg"
    }
  ],

  newArrivals: [
    { name: "Special Pizza Pratha", price: 449, img: "assets/chicken-tikka.png" },
    { name: "Shawarma Pizza", price: 299, img: "assets/chicken-tikka.png" },
    { name: "Delight Shawarma", price: 349, img: "assets/chicken-tikka.png" },
    { name: "Square Pizza Large", price: 1899, img: "assets/chicken-tikka.png" },
    { name: "Square Pizza Medium", price: 1149, img: "assets/chicken-tikka.png" }
  ],

  burgers: [
    { name: "Big Zinger", price: 450, img: "assets/big-burger-jpg" },
    { name: "Junior Zinger", price: 349, img: "assets/junior.jpg" },
    { name: "Crispy Crunch Burger", price: 450, img: "assets/crunchcrispy.jpg" },
    { name: "Chicken Reggy", price: 299, img: "assets/chickenreggy.jpg" },
    { name: "Juicy & Crunchy", price: 599, note: "Add Cheese Slice in Just 50/-", img: "assets/chicken-tikka.png" }
  ],

  wrapsAndFries: [
    { name: "Kebab Pratha", price: 319, img: "assets/chicken-tikka.png" },
    { name: "Zinger Pratha", price: 299, img: "assets/chicken-tikka.png" },
    { name: "Cheese Pratha", price: 349, img: "assets/chicken-tikka.png" },
    { name: "Zinger Shawarma", price: 280, img: "assets/chicken-tikka.png" },
    { name: "Chicken Shawarma", price: 249, img: "assets/chicken-tikka.png" }
  ],

  wingsAndNuggets: [
    { name: "Fried Wings", price5pc: 279, price10pc: 549, img: "assets/frieswings.jpg" },
    { name: "Grilled Wings", price5pc: 309, price10pc: 599, img: "assets/grilledwings.jpg" },
    { name: "Saucy Spicy Wings", price5pc: 329, price10pc: 649, img: "assets/saucywings.jpg" },
    { name: "Chicken Nuggets", price5pc: 269, price10pc: 499, img: "assets/nuggets.jpg" }
  ],

  chipsAndDips: [
    { name: "Plane Fries", priceS: 199, priceL: 349, img: "assets/planefries.jpg" },
    { name: "Matka Fries", priceS: 749, priceL: null, img: "assets/matkafries.jpg" },
    { name: "Masala Fries", priceS: 349, priceL: null, img: "assets/chicken-tikka.png" },
    { name: "Loaded Fries", priceS: 599, priceL: null, img: "assets/loadedfries.jpg" }
  ],

  sauces: [
    { name: "Garlic Mayo", price: 50, img: "assets/garlicmayo.jpg" },
    { name: "Picklish Sauce", price: 50, img: "assets/picklish.jpg" },
    { name: "Special Sauce", price: 50, img: "assets/specialsauce.jpg" }
  ],

  pasta: [
    { name: "Cheese Macaroni Pasta", priceHalf: 399, priceFull: 749, img: "assets/chicken-tikka.png" },
    { name: "Crunchy Pasta", priceHalf: 449, priceFull: 799, img: "assets/chicken-tikka.png" },
    { name: "Chicken Spicy Macaroni", priceHalf: 350, priceFull: 649, img: "assets/chicken-tikka.png" }
  ],

  sandwiches: [
    { name: "Chicken Cheese", price: 249, img: "assets/chicken-tikka.png" },
    { name: "Chicken Club", price: 219, img: "assets/chicken-tikka.png" },
    { name: "Jerry's Special Sandwich", price: 300, img: "assets/chicken-tikka.png" },
    { name: "3 Cheese Bread", price: 199, img: "assets/chicken-tikka.png" }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream Full", price: 349, img: "assets/chicken-tikka.png" },
    { name: "Ice Cream Half", price: 199, img: "assets/chicken-tikka.png" },
    { name: "1.5 Liter Drink", price: 220, img: "assets/chicken-tikka.png" },
    { name: "1 Liter Drink", price: 170, img: "assets/chicken-tikka.png" },
    { name: "500ml Drink", price: 110, img: "assets/chicken-tikka.png" },
    { name: "345ml Drink", price: 90, img: "assets/chicken-tikka.png" },
    { name: "Regular Drink", price: 80, img: "assets/chicken-tikka.png" },
    { name: "Small Water", price: 60, img: "assets/chicken-tikka.png" },
    { name: "Large Water", price: 120, img: "assets/chicken-tikka.png" }
  ],

  desserts: [
    { name: "Pineapple Cake (1 lb)", price: 600, desc: "Fresh and creamy pineapple cake, baked to perfection.", img: "assets/chicken-tikka.png" },
    { name: "Pineapple Cake (2 lb)", price: 1100, desc: "A large, fresh, and creamy pineapple cake for celebrations.", img: "assets/chicken-tikka.png" },
    { name: "Chocolate Cake (1 lb)", price: 700, desc: "Rich, fudgy, and moist double chocolate cake.", img: "assets/chicken-tikka.png" },
    { name: "Chocolate Cake (2 lb)", price: 1300, desc: "Decadent large chocolate cake loaded with chocolate frosting.", img: "assets/chicken-tikka.png" }
  ],

  deals: [
    { id: 1,  name: "Deal 1",     price: 1399, desc: "1 Large Chicken Tikka Pizza + 1 Liter Drink.",                                                                img: "assets/deal1.jpg" },
    { id: 2,  name: "Deal 2",     price: 1899, desc: "1 Large Jerry Special Pizza + 1 Liter Drink.",                                                               img: "assets/deal2.jpg" },
    { id: 3,  name: "Deal 3",     price: 1899, desc: "1 XL Chicken Tikka Pizza + 1.5 Liter Drink.",                                                                img: "assets/deal3.jpg" },
    { id: 4,  name: "Deal 4",     price: 2649, desc: "2 Large Chicken Tikka Pizzas + 1.5 Liter Drink.",                                                            img: "assets/deal4.jpg" },
    { id: 5,  name: "Deal 5",     price: 1049, desc: "2 Small Chicken Tikka Pizzas + 1 Liter Drink.",                                                              img: "assets/deal5.jpg" },
    { id: 6,  name: "Deal 6",     price: 1849, desc: "1 Large Chicken Tikka Pizza + 10 Hot Wings + 1 Liter Drink.",                                                img: "assets/deal6.jpg" },
    { id: 7,  name: "Deal 7",     price: 2099, desc: "1 Medium Jerry Special + 2 Zinger Burgers + 1 Liter Drink.",                                                 img: "assets/deal7.jpg" },
    { id: 8,  name: "Deal 8",     price: 1849, desc: "1 Large Chicken Tikka + 1 Small Fajita Pizza + 1.5 Liter Drink.",                                            img: "assets/deal8.jpg" },
    { id: 9,  name: "Deal 9",     price: 1099, desc: "1 Medium Chicken Tikka Pizza + 500ml Drink.",                                                                img: "assets/chicken-tikka.png" },
    { id: 10, name: "Deal 10",    price: 2449, desc: "1 Large Chicken Tikka + 2 Zinger Burgers + Large Fries + 1.5 L Drink.",                                      img: "assets/chicken-tikka.png" },
    { id: 11, name: "Deal 11",    price: 949,  desc: "1 Small Chicken Tikka + 1 Zinger Burger + 345ml Drink.",                                                     img: "assets/chicken-tikka.png0" },
    { id: 12, name: "Deal 12",    price: 559,  desc: "1 Junior Zinger Burger + Small Fries + 345ml Drink.",                                                        img: "assets/chicken-tikka.png" },
    { id: 13, name: "Deal 13",    price: 1499, desc: "4 Junior Zinger Burgers + 1.5 Liter Drink.",                                                                 img: "assets/chicken-tikka.png" },
    { id: 14, name: "Deal 14",    price: 799,  desc: "2 Junior Zinger Burgers + Two 345ml Drinks.",                                                                img: "assets/chicken-tikka.png" },
    { id: 15, name: "Deal 15",    price: 1749, desc: "1 Large Chicken Tikka + 1 Small Crunchy Pasta + 1 Liter Drink.",                                             img: "assets/chicken-tikka.png" },
    { id: 16, name: "Deal 16",    price: 919,  desc: "1 Small Chicken Tikka + 1 Small Macaroni Pasta + 345ml Drink.",                                              img: "assets/chicken-tikka.png" },
    { id: 17, name: "Deal 17",    price: 499,  desc: "1 Small Chicken Tikka Pizza + 345ml Drink.",                                                                 img: "assets/chicken-tikka.png0" },
    { id: 18, name: "Deal 18",    price: 599,  desc: "2 Chicken Shawarmas + Two 345ml Drinks.",                                                                    img: "assets/chicken-tikka.png" },
    { id: 19, name: "Deal 19",    price: 499,  desc: "1 Zinger Pratha or Shawarma + Small Fries + 345ml Drink.",                                                   img: "assets/chicken-tikka.png" },
    { id: 20, name: "Deal 20",    price: 929,  desc: "10 Fried Hot Wings + 1 Junior Zinger Burger + 345ml Drink.",                                                 img: "assets/chicken-tikka.png" },
    { id: 21, name: "MUFTA DEAL", price: 2699, desc: "1 Large Pizza + 2 Junior Zinger Burgers + Small Macaroni + 5 Nuggets + 1.5 L Drink.",                        img: "assets/chicken-tikka.png" }
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
