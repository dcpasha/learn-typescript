"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash")); // doesn't come with type declaration file
// axios.get<User>('https://jsonplaceholder.typicode.com/users/1').then((res) => {
//     console.log('Axios works!')
//     const { data } = res;
//     // console.log(data.company.catchPhrase)
//     printUser(data)
// }).catch(e => {
//     console.log('Error!', e);
// })
axios_1.default.get('https://jsonplaceholder.typicode.com/users/').then((res) => {
    console.log('Axios works!');
    const { data } = res;
    res.data.forEach(printUser);
}).catch(e => {
    console.log('Error!', e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log();
}
// Installing types for Lodash
// npm install --save-dev  @types/lodash
// Using helper methods from lodash
lodash_1.default.sample([123, 234, 345, 456, 567]);
