// Here are five real-world practice questions based on JavaScript data types:

// 1. User Information:
// You are building a user profile page. A user's age is stored as a number, their name as a string, and their membership status (active or inactive) as a boolean. Write a code snippet to create these variables and display them on the console.

const userAge = 23;
const userName = "Hashim";
const isMember = true;
// console.log(userAge, userName, isMember);

////////////

// 2. Shopping Cart:
// You are working on an e-commerce website. The total price of the cart is a number, and there’s a flag indicating if the cart has items that are on sale (boolean). If there are any sale items, the cart needs to apply a discount. Write a function to calculate the total price with or without the discount based on the sale flag.

// const isSale = true;
let isDiscount;
function calculateDiscount(totalPrice) {
    if (isSale && totalPrice >= 1999) {
        isDiscount = false
        console.log(`We have sale ${isSale} so discount is ${isDiscount}`);
    } else {
        isDiscount = true;
        console.log(`We have no sale ${isSale} so discount is ${isDiscount}`);
    }
}
// calculateDiscount(20000);

////////////////

// 3. Weather Application:
// In your weather application, the temperature is stored as a number.The weather condition, such as "sunny", "rainy", or "cloudy", is a string.Write a code block that checks if the temperature is above a certain threshold, and displays a message based on the weather condition.

function checkCondition(temperature) {
    if (temperature < 5) {
        console.log("Rainy");
    }
    else if (temperature >= 5 && temperature <= 20) {
        console.log("Cloudy");
    }
    else {
        console.log("Sunny");
    }
}
// checkCondition(21);

/////////////////

// 4. Survey Responses:
// You’re building a survey form for a website. A user’s response to a yes/no question is stored as a boolean (true for yes, false for no). Write code to process the survey responses and return a message based on the user’s answer.

const isResponse = true;
if (isResponse) {
    // console.log("Thank you for recommending us!");
} else {
    console.log("We appreciate your feedback!");
}

///////////////

// 5. User Preferences:
// In a mobile app, a user's preferences are stored in an object. This object has properties like themeColor (string), notificationsEnabled (boolean), and loginAttempts (number). Write a function that takes the user’s preferences object and prints a message about their theme color and whether notifications are enabled.

const userPreferences = {
    themeColor: "Dark",
    notificatonsEnabled: true,
    loginAttempts: 3,
}
function funcUserPreferences() {
    return userPreferences.notificatonsEnabled, userPreferences.themeColor;
}
// console.log(funcUserPreferences());