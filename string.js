// Initializing a new string primitive
const stringPrimitive = "A new string.";

// Initializing a new String object
const stringObject = new String("A new string.");

// typeof operator to determine the type of a value
typeof stringPrimitive; // String
typeof stringObject; // Object

"How are you?"[5]; // r
"How are you?".charAt(5); // r

"How are you?".indexOf("o"); // 1, only first instance
"How are you?".lastIndexOf("o"); // 9, last index

"How are you?".indexOf("are"); // 4

"How are you?".slice(8, 11); // you
"How are you?".slice(8); // you?

"How are you?".length; // 12

"How are you?".toUpperCase(); // HOW ARE YOU?
"How are you?".toLowerCase(); // how are you?

const originalString = "How are you?";
// Split string by whitespace character
const splitString = originalString.split(" ");
console.log(splitString); // [ 'How', 'are', 'you?' ]
splitString[1]; // are

const originalString = "How are you?"
// Replace the first instance of "How" with "Where"
const newString = originalString.replace("How", "Where");
console.log(newString); // Where are you?

//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
//output: F

//concat(v1, v2,..)
var message="Sam"
var final=message.concat(" is a"," hopeless romantic.")
//alerts "Sam is a hopeless romantic."
alert(final)

//substring(from, to)
var text="excellent"
text.substring(0,4) //returns "exce"
text.substring(2,4) //returns "ce"

//valueOf()
var mystr = "Hello World!";
var res = mystr.valueOf();
//output: Hello World!