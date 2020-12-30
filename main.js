// --1-- Candies
let m = 10;
let n = 3;
let eachOne = Math.floor(m / n);
let candyAnswer = eachOne * n;
console.log("1) " + candyAnswer + "candies will be eaten by all children");

// --2-- Deposite Profit

let deposit = 100;
let rate = 20;
let threshold = 170;
function depositProfit(deposit, rate, threshold){
    let noYears = 0;
    while(deposit < threshold){
        noYears++;
        deposit *= rate; 
    }
    console.log("2) It would take " + noYears + " years to pass specific threshold");
}
depositProfit(deposit, rate, threshold);


// --3-- Chunky Money return a two dimensional array

let chunkyMonkey = ["a", "b", "c", "d"];
let size = 2;
function twoDimArray(chunkyMonkey, size){
    let thisOne = new Array();
    thisOne[0] = chunkyMonkey.slice(0, size);
    thisOne[1] = chunkyMonkey.slice(size);
    console.log("3) Two dimensional array is ", thisOne)
}
twoDimArray(chunkyMonkey, size);
 
// --4-- Century From Year


let randomYear = 1905;
function centuryFromYear(randomYear){
    let copyYear = randomYear;
    noYears = 0;
    while(randomYear > 0){
        noYears++;
        randomYear = Math.floor(randomYear / 10);
    }
    let century;
    let first = Math.floor(copyYear / 100);
    let last = Math.floor(copyYear % 10);
    century = (noYears == 1 || noYears == 2) ? 1 : (first + last) > first ? first + 1: first;
    console.log("4) The century  from given year is: ", century);
}
centuryFromYear(randomYear);

// --5-- Reverse A String
let inputString = "hello";
function reverseAString(inputString){
    let tmpString = ""
    let tmpArray = [];
    noYears = 0;
    for(let i = 1; i <= inputString.length; i++){
        tmpString = inputString.slice(noYears, i);
        tmpArray[noYears] = tmpString; 
        noYears++;
    }
    tmpArray = tmpArray.reverse();
    let reverseAString = tmpArray.join('');
    console.log("5) Reverse of given string is ", reverseAString);
}
reverseAString(inputString);

// --6-- Sort an array of strings from shortest to longest
let inputArray = ["bc", "", "defg", "a", "hijkl"];
function sortByLength(inputArray){
    let sortByLength = inputArray.sort((a, b) => a.length - b.length);
    console.log("6) The array sorted by length is : ", sortByLength);
}
sortByLength(inputArray);

// --7--  Count a numerical value of a string given that a vowels is 1 and a consonant is 2

let s = "abcde";
function countVowelConsonant(s){
    let consonants = s.replaceAll(/[aeiou]/gi, '');
    let aNumericalArray = consonants.split('').fill(2);
    i = 0;
    while(i < s.length - consonants.length){
        aNumericalArray = [1, ...aNumericalArray];
        i++;
    }
    let sumOfletter = aNumericalArray.reduce((a, b) => a + b);
    console.log("7) The number of vowel consonants is", sumOfletter);
}
countVowelConsonant(s);
//
// --8-- Dice Roll
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
let num = 10
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
    console.log("9) Sum of odd Fibonacci Numbers is ", sumOdd);
}
sumOddFibonnaciNums(num);

//--10-- Find the pair of adjacent elements that has the largest product and log it;

inputArray = [3, 6, -2, -5, 7, 3];
function adjacentElementsProduct(inputArray){
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
    console.log("10) The largest product pair is ",productPair)
}
adjacentElementsProduct(inputArray);

//--11-- Avoid obstacles
inputArray = [5, 3, 6, 7, 9];
function avoidObstacles(someArray){
    someArray.sort();
    console.log(someArray);
    let j = 1;
    while(!(someArray.every(a => a % j != 0))){
        j++;
    }
    console.log("11) Minimal length of the jump enough to avoid all the obstacles is ", j);
}
avoidObstacles(inputArray);

//--12-- Check if given string is correct time representation of 24h clock. F.e. "23:71"
let time = "0:00"
function validTime(time){
    inputArray = time.split(':');
    let hours = parseInt(inputArray[0]);
    let minutes = parseInt(inputArray[1]);

    if((hours <= 23 && hours >= 0 && minutes <= 60 && minutes >= 0) || (hours == 24 && minutes == 0)){
        console.log("12) The given time is valid representation of 24h clock", true);
    }else{
        console.log("12) The given time is valid representation of 24h clock", false);
    }
}
validTime(time);

//--13-- Extract each kth. Remove each kth element from an array
inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function extractEachKth(inputArray, k){
        let extractedArray = inputArray.filter(a => a % k);
        console.log("13) After the extraction of kth element the array is", extractedArray);
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
console.log("14) Maximal difference is: ", difference);
}
arrayMaximalAdjacentDifference(inputArray);

//--15-- Picture carousel

const gallery = document.querySelector(".gallery");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
let clickIndex = 0;

nextBtn.addEventListener("click", ()=> {
    clickIndex = (clickIndex < 4) ? ++clickIndex : 4;
    gallery.style.transform = "translate(" + clickIndex * -20+ "%)";
    (clickIndex == 4) ? nextBtn.classList.add("selected") : (clickIndex == 1) ? previousBtn.classList.remove("selected"): null;
    
});

previousBtn.addEventListener("click", ()=> {
    clickIndex = (clickIndex > 0) ? --clickIndex : 0;
    gallery.style.transform = "translate(" + clickIndex * -20+ "%)";
    (clickIndex == 3) ? nextBtn.classList.remove("selected") : (clickIndex == 0) ? previousBtn.classList.add("selected") : null;
});

//--16-- Insert dashes (from "aba caba" to "a-b-a c-a-b-a")
inputString = "aba caba";
function insertDashes(inputString){
    let toArray = inputString.split(' ');
    let tmpArray = [];
    let tmp;
    for(let i = 0; i < toArray.length; i++){
        tmp = toArray[i].split('').map(a => a + "-").join('');
        tmp = tmp.slice(0, tmp.length - 1);
        tmpArray[i]= tmp;
    }
    let result = tmpArray.join(' ');
    console.log("16) Inserted dashes: ", result);
}
insertDashes(inputString);

//--17-- Find unique symbols (from "abcaaabb" to 3"

inputString = "abcaaabb";
function findUnique(inputString){
    inputArray = [...new Set(inputString)];
    console.log("17) I - This string has ", inputArray.length, " unique symbols");
}
findUnique(inputString);

let count = 0;
inputArray = ["a", "b", "c", "a", "a", "a", "b", "b"];
function findUniqueFromArray(inputArray){
    let distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    let unique = inputArray.filter(distinct);
    count++;
    if(count == 1){
        console.log("17) II - This string has ", unique.length, " unique symbols");
    }
    return unique;
}
findUniqueFromArray(inputArray);
function findUniqueValue(inputString){
    inputArray = inputString.split('');
    let unique = [];
    for(let i = 0; i < inputArray.length; i++){
        if (!unique.includes(inputArray[i])){
            unique.push(inputArray[i]);
        }
    }
    console.log("17) III - This string has ", unique.length, " unique symbols")
}

findUniqueValue(inputString);

//--18-- Array previous less (from [3, 5, 2, 4, 5] to [-1, 3, -1, 2, 4])
// if there is no smaller value, return -1

inputArray = [3, 5, 2, 4, 5];
let resultArr = [];
for(let i = 0; i < inputArray.length; i++){
    resultArr[i] = (inputArray[i-1] < inputArray[i]) ? inputArray[i - 1] : -1;
}
console.log("18) Array previous less is ", resultArr);

// --19-- Alphabet subsequence (from "ace" to true && from "effg" to false) 
// is the string ordered by alphabet w/o duplicates?

inputString = "ace";

function alphabetSubsequence(inputString){
    inputArray = inputString.split('');
    let tmpArray = [...inputArray].sort();
    tmpArray = findUniqueFromArray(tmpArray);
    console.log("19) The string is in alphabetical order:", JSON.stringify(inputArray) === JSON.stringify(tmpArray));
}
alphabetSubsequence(inputString);

// --20-- Domain type (from ["en.wiki.org", "codefights.com","happy.net", "code.info"] to ["organization", "commercial","network", "information"])

inputArray = ["en.wiki.org", "codefights.com","happy.net", "code.info"];

function domainType(inputArray){
    let tmpArray = [];
    let tmpString;
    let resultArray = [];
    for(let i = 0; i < inputArray.length; i++){
        tmpArray = inputArray[i].toString();
        tmp = tmpArray.split('.');
        for(let j = 0; j < tmp.length; j++){
            tmpString = tmp[j].toString();
            switch(tmpString){
                case "org":
                    resultArray.push("organization");
                    break;
                case "com":
                    resultArray.push("commercial");
                    break;
                case "net":
                    resultArray.push("network");
                    break;
                case "info":
                    resultArray.push("information");
                    break;
                default:
                    break;
            }
        }
        if(!resultArray[i]){
            resultArray.push("unknown domain type");
        }
    }
    console.log("20) the domain types of given websites are ", resultArray)
}
domainType(inputArray);

// --21-- Sum of 2 (from a = [1, 2, 3], b = [10, 20, 30, 40] , v=42 to true)
// because 42 is 40 + 2, a sum of two values from separate arrays
let a = [1, 2, 3];
let b = [10, 20, 30, 40];
let v = 42;


function sumOfTwo(a, b, v){
    let tmp;
    let check;
    let count = 0;
    for(let i = 0; i < a.length; i++){
        tmp = a[i];
        for(let j = 0; j < b.length; j++){
            check = (tmp + b[j]) === v ? true : false;
            if(check === true){
                count++;
            }
        }
    }
    (count > 0) ? console.log("21) Two sums can be added to get the sum of v ", true) : console.log("21) Two sums can be added to get the sum of v", false);
}
sumOfTwo(a, b, v);

// --22-- Extract matrix column (from matrix = [[1, 1, 1, 2],[0, 5, 0, 4],[2, 1, 3, 6]]) and  column = 2 to [1, 0, 3]
// because index 2 is extracted from every array
let matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
let column = 2;

function extractMatrixColumn(matrix, column){
    let tmpArray;
    let cat;
    let resultArr = [];
    for(let i = 0; i < matrix.length; i++){
        tmpArray = matrix[i];
        resultArr[i] = tmpArray[column]; 
    }
    console.log("22) Matrix contains these number in given column: ", resultArr)
}

extractMatrixColumn(matrix, column);

// --23-- Tweet box

const textArea = document.getElementById("textarea");
const btn = document.querySelector(".btn");
const counter = document.querySelector(".counter");

textArea.addEventListener("keydown", ()=>{
    let count = textArea.value.length;
    if(count >= 120) {
        counter.style.color = "red";
    }else{
        counter.style.color = "black";
    } 
    counter.innerHTML = 140 - count + "/140";
    (count > 140) ? btn.style.opacity = "0.5": null;
});

// --24-- stop game

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number


//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);
// document.getElementById("btn-start").addEventListener("click", ()=> {
//     setTargetInt();
// });
//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


const spin = async () => {
        let i = 0;
        while(pushed == false){
            spinningElem.innerHTML = ++i;
            await sleep(75);
        }
        stop(i); 
}

function stop(i){
    let result = document.getElementById('result'); 
    let precision = Math.abs(targetInt - i);
    result.innerHTML = (precision == 0) ? "The victory is yours, congratulations!" : "Oh no! You was close! You missed by " + precision + "ms";    
}

//main
setTargetInt();
spin()