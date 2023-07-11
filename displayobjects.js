
import {myObj, Language} from "./display JavaScript objects.js"   // modules this tow objects [   myObj, Language  ] from this file [  "./display JavaScript objects.js"  ]

// 3. Displaying the Object using Object.values()
const mySkill = Object.values(Language);
console.log(Array.isArray(mySkill)); // return a array of object value
console.log(mySkill); // [ 'JavaScript', 'Python', 'C++' ]



// 4. Displaying the Object using JSON.stringify()
myObj.nationality = myObj.nationality.toString(); // if you want to see object method at frist need toString()
const myDetails = JSON.stringify(myObj); // return JSON
console.log(myDetails); // {"fName":"Chayon","lName":"Mondol","age":25,"nationality":"nationality (){\r\n        return `I am ${this.fName} ${this.lName}. I'm a Bangladeshi.`;\r\n    }"}


// *** you will convert to this JSON to Object
const jsToObj = JSON.parse(myDetails); // return Object
console.log(jsToObj);