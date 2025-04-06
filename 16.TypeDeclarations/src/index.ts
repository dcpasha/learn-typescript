import axios from "axios";
import _ from "lodash"; // doesn't come with type declaration file

// Creating a custom type and provide it to Axios
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

// axios.get<User>('https://jsonplaceholder.typicode.com/users/1').then((res) => {
//     console.log('Axios works!')
//     const { data } = res;
//     // console.log(data.company.catchPhrase)
//     printUser(data)
// }).catch(e => {
//     console.log('Error!', e);
// })

axios.get<User[]>('https://jsonplaceholder.typicode.com/users/').then((res) => {
    console.log('Axios works!')
    const { data } = res;
    res.data.forEach(printUser)
}).catch(e => {
    console.log('Error!', e);
})

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log()
}

// Installing types for Lodash
// npm install --save-dev  @types/lodash

// Using helper methods from lodash
_.sample([123, 234, 345, 456, 567]) 
