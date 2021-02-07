//String 
const firstName = 'Jose';
const lastName = 'Evangelista';
const age = '19';
const str = 'Hello there my name is Walter White';
const tags = 'Web Development, Web Design, Progamming';
const quote = " Sky is the limit."

//Concatenation
let val; 
val = firstName +" "+ lastName;
console.log(val);

//Append
dog = "Naruto ";
dog += "Uzumaki";
console.log(dog);

cat = "My name is " + firstName +" " + lastName + " Walter " + age;
console.log(cat); 

//Escaping
Escape = "You're you and I'm me";
console.log(Escape);

//Length
pogi = firstName.length;
console.log(hey);

//concat
hotdog = firstName.concat(' ' + lastName);
console.log(hotdog);

//Change case
me = firstName.toLowerCase()+ " ";
me += lastName.toUpperCase();
console.log(me);

val = firstName[3];
lav = firstName.charAt('3')
console.log(lav);

//Substring
jomig = firstName.substring(3, 7);
console.log(jomig);

//Slice
mig = firstName.slice(0,4);
negative = firstName.slice(-6);
console.log(negative);

//split
val = quote.split(" ");
console.log(val);

//Replace
change = str.replace('Walter White', 'Jose Miguel');
console.log(change);

//Inlcludes
included = quote.includes('mind');
console.log(included);