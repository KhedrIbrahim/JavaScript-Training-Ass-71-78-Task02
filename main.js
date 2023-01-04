let myString = "EElllzzzzzzzeroo";

let newWord = myString.split("").filter((ele, ind, arr) => arr.indexOf(ele) === ind ) 
.reduce((acc, cele) => `${acc}${cele}`)


console.log(newWord);
// Elzero