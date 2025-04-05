/* 
'Typeof Guard' involves simply doing a type check before working with a value

- typeof is great when we work with primitives
*/

function tripple(value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
        return value * 3;
}

//////////////////////////////////////////////////////////////////
/* Truthiness Type Guard involves checking a value for being truthy or falsy before working with it
This is helpful in avoiding errors when values might be nulll or undefined.
*/
const printLetters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log("You did not pass in a word");
    }
}

//////////////////////////////////////////////////////////////////
/* Equality Narrowing involves comparing types to each other before doing certain operations with values
*/
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        console.log(x.toUpperCase())
    }
}
// someDemo("text", "text")

//////////////////////////////////////////////////////////////////
/* Narrowing with the IN operator
It allows you to work with interfaces
*/
const pet = {name: "Omi", age: 5}

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    // 'in' allows to narrow the type
    if('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

const movieDur = getRuntime({title: "Casablanca", duration: 102})
console.log(movieDur)
const showDur = getRuntime({title: "Friends", numEpisodes: 200, episodeDuration: 20})
console.log(showDur)

//////////////////////////////////////////////////////////////////
/* instaceof Narrowing 
instanceof is a JS operator that allows us to cheeck if one thing is an instance of another
*/