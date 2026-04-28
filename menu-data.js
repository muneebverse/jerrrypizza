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
    },
    {
      name: "Hot & Spicy",
      desc: "Pizza Sauce, Spicy Chicken, Cheese, Capsicum, Red Jalapeño.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1594007654729-407eeec4be32?w=500&q=80"
    },
    {
      name: "Picklish Tikka",
      desc: "Picklish Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Onions, Black Olives.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=500&q=80"
    },
    {
      name: "Cheese & Kebab",
      desc: "Special Sauce, Seekh Kebab, Cheese, Black Olives, Capsicum, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&q=80"
    },
    {
      name: "Bar.B.Q Tikka",
      desc: "Pizza Sauce, Seekh Kebab, Tikka Chicken, Cheese, Black Olives, Capsicum.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80"
    }
  ],

  newArrivals: [
    { name: "Special Pizza Pratha", price: 449, img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80" },
    { name: "Shawarma Pizza", price: 299, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80" },
    { name: "Delight Shawarma", price: 349, img: "https://images.unsplash.com/photo-1648943564943-4dcde6d3e691?w=500&q=80" },
    { name: "Square Pizza Large", price: 1899, img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&q=80" },
    { name: "Square Pizza Medium", price: 1149, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80" }
  ],

  burgers: [
    { name: "Big Zinger", price: 450, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { name: "Junior Zinger", price: 349, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80" },
    { name: "Crispy Crunch Burger", price: 450, img: "https://images.unsplash.com/photo-1594221708734-7a32707b22ab?w=500&q=80" },
    { name: "Chicken Reggy", price: 299, img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&q=80" },
    { name: "Juicy & Crunchy", price: 599, note: "Add Cheese Slice in Just 50/-", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80" }
  ],

  wrapsAndFries: [
    { name: "Kebab Pratha", price: 319, img: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=500&q=80" },
    { name: "Zinger Pratha", price: 299, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80" },
    { name: "Cheese Pratha", price: 349, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&q=80" },
    { name: "Zinger Shawarma", price: 280, img: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=500&q=80" },
    { name: "Chicken Shawarma", price: 249, img: "https://images.unsplash.com/photo-1648943564943-4dcde6d3e691?w=500&q=80" }
  ],

  wingsAndNuggets: [
    { name: "Fried Wings", price5pc: 279, price10pc: 549, img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&q=80" },
    { name: "Grilled Wings", price5pc: 309, price10pc: 599, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80" },
    { name: "Saucy Spicy Wings", price5pc: 329, price10pc: 649, img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80" },
    { name: "Chicken Nuggets", price5pc: 269, price10pc: 499, img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80" }
  ],

  chipsAndDips: [
    { name: "Plane Fries", priceS: 199, priceL: 349, img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80" },
    { name: "Matka Fries", priceS: 749, priceL: null, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80" },
    { name: "Masala Fries", priceS: 349, priceL: null, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80" },
    { name: "Loaded Fries", priceS: 599, priceL: null, img: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=500&q=80" }
  ],

  sauces: [
    { name: "Garlic Mayo", price: 50, img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=500&q=80" },
    { name: "Picklish Sauce", price: 50, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80" },
    { name: "Special Sauce", price: 50, img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&q=80" }
  ],

  pasta: [
    { name: "Cheese Macaroni Pasta", priceHalf: 399, priceFull: 749, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80" },
    { name: "Crunchy Pasta", priceHalf: 449, priceFull: 799, img: "https://images.unsplash.com/photo-1612182275002-8a23c7d6c0d6?w=500&q=80" },
    { name: "Chicken Spicy Macaroni", priceHalf: 350, priceFull: 649, img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80" }
  ],

  sandwiches: [
    { name: "Chicken Cheese", price: 249, img: "https://images.unsplash.com/photo-1509722747041-616f39b57232?w=500&q=80" },
    { name: "Chicken Club", price: 219, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80" },
    { name: "Jerry's Special Sandwich", price: 300, img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=500&q=80" },
    { name: "3 Cheese Bread", price: 199, img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500&q=80" }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream Full", price: 349, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80" },
    { name: "Ice Cream Half", price: 199, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&q=80" },
    { name: "1.5 Liter Drink", price: 220, img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500&q=80" },
    { name: "1 Liter Drink", price: 170, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" },
    { name: "500ml Drink", price: 110, img: "https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=500&q=80" },
    { name: "345ml Drink", price: 90, img: "https://images.unsplash.com/photo-1603394630002-c6a61d78b28a?w=500&q=80" },
    { name: "Regular Drink", price: 80, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" },
    { name: "Small Water", price: 60, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&q=80" },
    { name: "Large Water", price: 120, img: "https://images.unsplash.com/photo-1606168094336-48f8b0c80b9e?w=500&q=80" }
  ],

  desserts: [
    { name: "Pineapple Cake (1 lb)", price: 600, desc: "Fresh and creamy pineapple cake, baked to perfection.", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80" },
    { name: "Pineapple Cake (2 lb)", price: 1100, desc: "A large, fresh, and creamy pineapple cake for celebrations.", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80" },
    { name: "Chocolate Cake (1 lb)", price: 700, desc: "Rich, fudgy, and moist double chocolate cake.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80" },
    { name: "Chocolate Cake (2 lb)", price: 1300, desc: "Decadent large chocolate cake loaded with chocolate frosting.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80" }
  ],

  deals: [
    { id: 1,  name: "Deal 1",     price: 1399, desc: "1 Large Chicken Tikka Pizza + 1 Liter Drink.",                                                                img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80" },
    { id: 2,  name: "Deal 2",     price: 1899, desc: "1 Large Jerry Special Pizza + 1 Liter Drink.",                                                               img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { id: 3,  name: "Deal 3",     price: 1899, desc: "1 XL Chicken Tikka Pizza + 1.5 Liter Drink.",                                                                img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
    { id: 4,  name: "Deal 4",     price: 2649, desc: "2 Large Chicken Tikka Pizzas + 1.5 Liter Drink.",                                                            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
    { id: 5,  name: "Deal 5",     price: 1049, desc: "2 Small Chicken Tikka Pizzas + 1 Liter Drink.",                                                              img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80" },
    { id: 6,  name: "Deal 6",     price: 1849, desc: "1 Large Chicken Tikka Pizza + 10 Hot Wings + 1 Liter Drink.",                                                img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
    { id: 7,  name: "Deal 7",     price: 2099, desc: "1 Medium Jerry Special + 2 Zinger Burgers + 1 Liter Drink.",                                                 img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: 8,  name: "Deal 8",     price: 1849, desc: "1 Large Chicken Tikka + 1 Small Fajita Pizza + 1.5 Liter Drink.",                                            img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" },
    { id: 9,  name: "Deal 9",     price: 1099, desc: "1 Medium Chicken Tikka Pizza + 500ml Drink.",                                                                img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80" },
    { id: 10, name: "Deal 10",    price: 2449, desc: "1 Large Chicken Tikka + 2 Zinger Burgers + Large Fries + 1.5 L Drink.",                                      img: "https://images.unsplash.com/photo-1594221708734-7a32707b22ab?w=400&q=80" },
    { id: 11, name: "Deal 11",    price: 949,  desc: "1 Small Chicken Tikka + 1 Zinger Burger + 345ml Drink.",                                                     img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400&q=80" },
    { id: 12, name: "Deal 12",    price: 559,  desc: "1 Junior Zinger Burger + Small Fries + 345ml Drink.",                                                        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80" },
    { id: 13, name: "Deal 13",    price: 1499, desc: "4 Junior Zinger Burgers + 1.5 Liter Drink.",                                                                 img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80" },
    { id: 14, name: "Deal 14",    price: 799,  desc: "2 Junior Zinger Burgers + Two 345ml Drinks.",                                                                img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80" },
    { id: 15, name: "Deal 15",    price: 1749, desc: "1 Large Chicken Tikka + 1 Small Crunchy Pasta + 1 Liter Drink.",                                             img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
    { id: 16, name: "Deal 16",    price: 919,  desc: "1 Small Chicken Tikka + 1 Small Macaroni Pasta + 345ml Drink.",                                              img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80" },
    { id: 17, name: "Deal 17",    price: 499,  desc: "1 Small Chicken Tikka Pizza + 345ml Drink.",                                                                 img: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80" },
    { id: 18, name: "Deal 18",    price: 599,  desc: "2 Chicken Shawarmas + Two 345ml Drinks.",                                                                    img: "https://images.unsplash.com/photo-1648943564943-4dcde6d3e691?w=400&q=80" },
    { id: 19, name: "Deal 19",    price: 499,  desc: "1 Zinger Pratha or Shawarma + Small Fries + 345ml Drink.",                                                   img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
    { id: 20, name: "Deal 20",    price: 929,  desc: "10 Fried Hot Wings + 1 Junior Zinger Burger + 345ml Drink.",                                                 img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80" },
    { id: 21, name: "MUFTA DEAL", price: 2699, desc: "1 Large Pizza + 2 Junior Zinger Burgers + Small Macaroni + 5 Nuggets + 1.5 L Drink.",                        img: "https://images.unsplash.com/photo-1594007654729-407eeec4be32?w=400&q=80" }
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
