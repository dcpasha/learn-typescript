// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [[]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

// Object type - describes its type
type Product = {
    name: string,
    price: number
}
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]) {
    let sum: number = 0;
    for ( let product of products) {
        sum += product.price;
    }
    return sum;
}

let myProducts: Product[] = [{name: "Apple", price: 10}, {name: "Orange", price: 12}]
console.log(getTotal(myProducts));