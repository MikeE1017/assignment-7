console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let FavoriteFoods = ["tacos", "enchaladas", "burgers", "steak", "pasta", "pizza"]


// 2. Loop through the list and print: "One of my favorite foods is ______."

for (let i = 0; i < FavoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + FavoriteFoods[i] + ".");
}



// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 0; i < FavoriteFoods.length; i++) {
  console.log("My #" + (i + 1) + " favorite food is " + FavoriteFoods[i] + ".")
  }




// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
  console.log("----------------------------"); // for spacing
}



// 4b. Call the function at least 3 times
printFoodRecommendation("steak");
printFoodRecommendation("enchaladas");
printFoodRecommendation("pizza");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    console.log(friendFavorites[i]);
  }
}


// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    foodsWithA.push(friendFavorites[i]);
  }
}
console.log("Foods with the letter 'a':", foodsWithA);


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > 6) {
    longFoodNames.push(friendFavorites[i]);
  }
}


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length <= 6) {
    shortFoodNames.push(friendFavorites[i]);
  }
}


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log("Foods with long names:", longFoodNames);
console.log("Foods with short names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("The number of long and short food names is the same.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFood = "";
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > longestFood.length) {
    longestFood = friendFavorites[i];
  }
}
console.log(
  "The longest food name in the list is " +
    longestFood +
    " with " +
    longestFood.length +
    " characters."
);