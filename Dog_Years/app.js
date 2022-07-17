// My age as a variable.
let myAge = 29;

//Will change.
let earlyYears = 2;

//Early years in dog years 10.5 for first 2 years.
earlyYears *= 10.5;

// -2 from myAge as accounted for above.
let laterYears = myAge - 2;

//Multiply laterYears by 4 for dog years. 
laterYears = laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//myAgeInDogYears = earlyYears + laterYears
let myAgeInDogYears = earlyYears + laterYears;

//My name as a string and send to lowercase
let myName = 'Mike'.toLowerCase();

//Log it all out to the console. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);