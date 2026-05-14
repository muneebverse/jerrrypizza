// ============================================================
//  JERRY PIZZA — MENU DATA (UPDATED STRUCTURE)
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
      note: "Includes Seekh Kebab"
    },
    {
      name: "Bubble Cheese Stuffer",
      desc: "Tikka Chicken, Red Jalapeño, Special Sauce, Cheese, Tomatoes, Capsicum, Black Olives.",
      sizes: { S: 699, M: 1230, L: 1850, XL: 2349 },
      tag: "Cheesy",
      emoji: "🧀",
      img: "assets/bubble-cheese-stuffer.jpg",
      note: "Edge Filled with Cheese"
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
      note: "Pepperoni & Kebab Mix"
    }
  ],

  regularPizzas: [
    {
      name: "Chicken Tikka",
      desc: "Pizza Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Black Olives, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/tikka.jpg",
      note: "Traditional Tikka Flavor"
    },
    {
      name: "Chicken Fajita",
      desc: "Pizza Sauce, Fajita Chicken, Cheese, Capsicum, Green Jalapeño, Mushrooms, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/fajita.jpg",
      note: "Spicy Mexican Style"
    },
    {
      name: "Hot & Spicy",
      desc: "Pizza Sauce, Spicy Chicken, Cheese, Capsicum, Red Jalapeño.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/hot.jpg",
      note: "Extra Hot Jalapeños"
    },
    {
      name: "Picklish Tikka",
      desc: "Picklish Sauce, Tikka Chicken, Cheese, Tomatoes, Capsicum, Onions, Black Olives.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/pick-tikka.jpg",
      note: "Tangy Picklish Base"
    },
    {
      name: "Cheese & Kebab",
      desc: "Special Sauce, Seekh Kebab, Cheese, Black Olives, Capsicum, Onions.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/cheese-kebab.jpg",
      note: "Loaded with Kebab Chunks"
    },
    {
      name: "Bar.B.Q Tikka",
      desc: "Pizza Sauce, Seekh Kebab, Tikka Chicken, Cheese, Black Olives, Capsicum.",
      sizes: { S: 499, M: 1050, L: 1299, XL: 1849 },
      img: "assets/bbq.jpg",
      note: "Smoky BBQ Taste"
    }
  ],

  newArrivals: [
    { 
      name: "Square Pizza", 
      desc: "Our unique deep-dish square shaped pizza.",
      sizes: { M: 1149, L: 1899 }, 
      img: "assets/squarelarge.jpg",
      note: "Square Cut"
    },
    { name: "Special Pizza Pratha", price: 449, img: "assets/pizzapar.jpg", desc: "Fusion of Pizza and Pratha" },
    { name: "Shawarma Pizza", price: 299, img: "assets/shawarmapizza.jpg", desc: "Shawarma style toppings" },
    { name: "Delight Shawarma", price: 349, img: "assets/delight.jpg", desc: "Premium Shawarma Wrap" }
  ],

  burgers: [
    { name: "Big Zinger", price: 450, img: "assets/big-burger.jpg", desc: "Large Crispy Chicken Fillet" },
    { name: "Junior Zinger", price: 349, img: "assets/junior.jpg", desc: "Standard Crispy Chicken Fillet" },
    { name: "Crispy Crunch Burger", price: 450, img: "assets/crunchcrispy.jpg", desc: "Extra Crunchy Coating" },
    { name: "Chicken Reggy", price: 299, img: "assets/chickenreggy.jpg", desc: "Regular Chicken Burger" },
    { 
      name: "Juicy & Crunchy", 
      price: 599, 
      img: "assets/juicy.jpg", 
      desc: "Premium Tender Chicken Burger",
      note: "Add Cheese Slice in Just 50/-" 
    }
  ],

  wingsAndNuggets: [
    { 
      name: "Fried Wings", 
      sizes: { "5pc": 279, "10pc": 549 }, 
      img: "assets/frieswings.jpg",
      desc: "Crispy Deep Fried Wings"
    },
    { 
      name: "Grilled Wings", 
      sizes: { "5pc": 309, "10pc": 599 }, 
      img: "assets/grilledwings.jpg",
      desc: "Flame Grilled Wings"
    },
    { 
      name: "Saucy Spicy Wings", 
      sizes: { "5pc": 329, "10pc": 649 }, 
      img: "assets/saucywings.jpg",
      desc: "Wings tossed in Spicy Sauce"
    },
    { 
      name: "Chicken Nuggets", 
      sizes: { "5pc": 269, "10pc": 499 }, 
      img: "assets/nuggets.jpg",
      desc: "Bite-sized Chicken Nuggets"
    }
  ],

  chipsAndDips: [
    { 
      name: "Plane Fries", 
      sizes: { S: 199, L: 349 }, 
      img: "assets/planefries.jpg",
      desc: "Salted Golden Fries" 
    },
    { 
      name: "Matka Fries", 
      sizes: { S: 749 }, 
      img: "assets/matkafries.jpg",
      desc: "Fries served in a traditional Matka",
      note: "Special Jerry Sauce"
    },
    { 
      name: "Masala Fries", 
      sizes: { S: 349 }, 
      img: "assets/masala.jpg",
      desc: "Spiced with Jerry Masala" 
    },
    { 
      name: "Loaded Fries", 
      sizes: { S: 599 }, 
      img: "assets/loadedfries.jpg",
      desc: "Topped with Cheese, Chicken & Olives" 
    }
  ],

  pasta: [
    { 
      name: "Cheese Macaroni Pasta", 
      sizes: { Half: 399, Full: 749 }, 
      img: "assets/cheese-pasta.jpg",
      desc: "Classic Cheesy Macaroni" 
    },
    { 
      name: "Crunchy Pasta", 
      sizes: { Half: 449, Full: 799 }, 
      img: "assets/crunchy-pasta.jpg",
      desc: "Pasta with Crunchy Chicken Topping" 
    },
    { 
      name: "Chicken Spicy Macaroni", 
      sizes: { Half: 350, Full: 649 }, 
      img: "assets/spicy-pasta.jpg",
      desc: "Spicy and Saucy Macaroni" 
    }
  ],

  drinksAndIceCream: [
    { name: "Ice Cream", sizes: { Half: 199, Full: 349 }, img: "assets/full.jpg" },
    { name: "Soft Drink 1.5 Liter", price: 220, img: "assets/1.5l.jpg" },
    { name: "Soft Drink 1 Liter", price: 170, img: "assets/1l.jpg" },
    { name: "Soft Drink 500ml", price: 110, img: "assets/500ml.jpg" },
    { name: "Soft Drink 345ml", price: 90, img: "assets/345ml.jpg" },
    { name: "Regular Drink", price: 80, img: "assets/regular.jpg" },
    { name: "Mineral Water", sizes: { S: 60, L: 120 }, img: "assets/small-water.jpg" }
  ],

  // Other categories like sauces, wrapsAndFries, sandwiches, desserts, and deals 
  // remain standard objects as they generally have single prices or specific logic.
  sauces: [
    { name: "Garlic Mayo", price: 50, img: "assets/garlicmayo.jpg" },
    { name: "Picklish Sauce", price: 50, img: "assets/picklish.jpg" },
    { name: "Special Sauce", price: 50, img: "assets/specialsauce.jpg" }
  ],

  desserts: [
    { name: "Pineapple Cake (1 lb)", price: 600, desc: "Fresh and creamy pineapple cake.", img: "assets/1lb.jpg" },
    { name: "Pineapple Cake (2 lb)", price: 1100, desc: "A large fresh pineapple cake.", img: "assets/2lb.jpg" },
    { name: "Chocolate Cake (1 lb)", price: 700, desc: "Rich double chocolate cake.", img: "assets/ch1lb.jpg" },
    { name: "Chocolate Cake (2 lb)", price: 1300, desc: "Decadent large chocolate cake.", img: "assets/ch2lb.jpg" }
  ]
};
