/*
Some common solutions to display JavaScript objects are:
1. Displaying the Object Properties by name
2. Displaying the Object Properties in a Loop
3. Displaying the Object using Object.values()
4. Displaying the Object using JSON.stringify()
*/

// 1. Displaying the Object Properties by name
export const myObj = {
    fName : "Chayon",
    lName : "Mondol",
    age : 25,
    nationality (){
        return `I am ${this.fName} ${this.lName}. I'm a Bangladeshi.`;
    }
}
console.log(myObj.fName); // Chayon
console.log(myObj.lName); // Mondol
console.log(myObj.age); // 25
console.log(myObj.nationality()); // I am Chayon Mondol. I'm a Bangladeshi.


// 2. Displaying the Object Properties in a Loop
export const Language = {
    name1 : "JavaScript",
    name2 : "Python",
    name3 : "C++"
}
let displayObj = "";
for (let x in Language){
    displayObj += Language[x] + "  ";
}
console.log(displayObj); // JavaScript  Python  C++ 

