// //first challenge
// let m = 10;
// let n = 3;
// let eachOne = Math.floor(m / n);
// let candyAnswer = eachOne * n;
// console.log(candyAnswer);

// //second challenge
// let deposit = 100;
// let rate = 20;
// let threshold = 170;
// let noYears = 0;
// while(deposit < threshold){
//     noYears++;
//     deposit *= 1.2; 
// }

// console.log(noYears);

// //third challenges
// // let chunkyMonkey = ["a", "b", "c", "d"];
// let thisOne = new Array();
// // thisOne[0] = chunkyMonkey.slice(0, 2);
// // thisOne[1] = chunkyMonkey.slice(2);
// // console.log(thisOne)
 
// let chunkyMonkey = [0, 1, 2, 3, 4, 5];
// thisOne[0] = chunkyMonkey.slice(0, 4);
// thisOne[1] = chunkyMonkey.slice(4);
// console.log(thisOne)

// //find century a year is in

// let randomYear = 1900;
// let copyYear = randomYear;
// noYears = 0;
// while(randomYear > 0){
//     noYears++;
//     randomYear = Math.floor(randomYear / 10);
// }
// let century;
// let first = Math.floor(copyYear / 100);
// let last = Math.floor(copyYear % 10);
// console.log(first + last)
// century = (noYears == 1 || noYears == 2) ? 1 : (first + last) > first ? first + 1: first;
//         // first = Math.floor(copyYear / 100);
//         // century = (Math.floor(copyYear % 10) != 0) ? (first + 1) : first;
        
// console.log("the century is: " + century);

// //reverse a string
// let reverseAString = "hello";
// let tmpString = ""
// let tmpArray = reverseAString.split();
// noYears = 0;
// for(let i = 1; i <= reverseAString.length; i++){
//     tmpString = reverseAString.slice(noYears, i);
//     tmpArray[noYears] = tmpString; 
//     noYears++;
// }
// tmpArray = tmpArray.reverse();
// console.log(tmpArray)
// reverseAString = tmpArray.join('');
// console.log(reverseAString);

// //sort an array of strings from shortest to longest

let inputArray = ["abc", "", "aaa", "a", "zz"];
let sortByLength = inputArray.sort((a, b) => a.length - b.length);
console.log(sortByLength);

// // count a numerical value of a string given that a vowels is 1 and a consonant is 2

// let s = "abcde";
// let consonants = s.replaceAll(/[aeiou]/gi, '');
// let aNumericalArray = consonants.split('').fill(2);
// i = 0;
// while(i < s.length - consonants.length){
//     aNumericalArray = [1, ...aNumericalArray];
//     i++;
// }
// let sumOfletter = aNumericalArray.reduce((a, b) => a + b);
// console.log(sumOfletter);

//

function rollDice(dots){
    let dice = new Array(6);
    dice[0] = document.getElementById("one-dot");
    dice[1] = document.getElementById("two-dots");
    dice[2] = document.getElementById("three-dots");
    dice[3] = document.getElementById("four-dots");
    dice[4] = document.getElementById("five-dots");
    dice[5] = document.getElementById("six-dots");
    dice[dots].classList.remove("dice--opacity");
    dice[Math.floor(Math.random()*6)].classList.add("dice--opacity"); 
}

//--09-- sum of odd Fibonacci numbers
function sumOddFibonnaciNums(num){
    let fibonacciNr = [1, 1];
    let sumFb = 0;
    let j = 2;
    while(fibonacciNr[fibonacciNr.length - 1] < num){
        sumFb = fibonacciNr[fibonacciNr.length - 2] + fibonacciNr[fibonacciNr.length - 1];
        if(sumFb < num){
            fibonacciNr[j] = sumFb;
            j++;
        }else{
            break;
        }
    }
    let sumOdd = fibonacciNr.filter(a => a % 2).reduce((acc, cul) => acc + cul);
    console.log(fibonacciNr);
    console.log(sumOdd);
}

//--10-- Find the pair of adjacent elements that has the largest product and log it;

inputArray = [3, 6, -2, -5, 7, 3];
let tmp = 0;
let product = 9;
let productPair = [];
if(!product){
    console.log(true)
}else {
    console.log(false)
}
for(i = 0; (i + 1) < inputArray.length; i++){
    tmp = inputArray[i] * inputArray[i + 1];
    if(!product || tmp > product){
        product = tmp;
        productPair = [inputArray[i], inputArray[i + 1]]
    }
}
console.log(productPair)

//--11-- Avoid obstacles
inputArray = [5, 3, 6, 7, 9];
function avoidObstacles(someArray){
    someArray.sort();
    console.log(someArray);
    let j = 1;
    while(!(someArray.every(a => a % j != 0))){
        j++;
    }
    console.log(j);
}

//--12-- Check if given string is correct time representation of 24h clock. F.e. "23:71"
function validTime(time){
    inputArray = time.split(':');
    let hours = parseInt(inputArray[0]);
    let minutes = parseInt(inputArray[1]);

    if((hours <= 23 && hours >= 0 && minutes <= 60 && minutes >= 0) || (hours == 24 && minutes == 0)){
        console.log(true);
    }else{
        console.log(false);
    }
}

//--13-- Extract each kth. Remove each kth element from an array

inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function extractEachKth(inputArray, k){
        let extractedArray = inputArray.filter(a => a % k);
        console.log(extractedArray);
}

extractEachKth(inputArray, 3);

//--14-- Maximal adjacent difference. Find the maximal absolute difference between two adjacent elements.
inputArray = [2, 9, 2323, 1];
function arrayMaximalAdjacentDifference(inputArray){
let tmp = 0;
let difference;
for(i = 0; (i + 1) < inputArray.length; i++){
    tmp = Math.abs(inputArray[i] - inputArray[i + 1]);
    if(!difference || tmp > difference){
        difference = tmp;
    }
}
console.log("Maximal difference is: " + difference);
}
arrayMaximalAdjacentDifference(inputArray);

//--15-- 