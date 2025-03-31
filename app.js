// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    let yen = dollar * (156.5 / 1.07)
    return yen
}

const fromEuroToDollar = (euro) => {
    let dollar = euro * 1.07
    return dollar
}

const fromYenToPound = (yen) => {
    let pound = yen * (0.87 / 156.5)
    return pound
}




// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };