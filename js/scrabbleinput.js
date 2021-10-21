


// int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};
let POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
let Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let player1score = 0;
let player2score = 0;



// can you in JS perform an islower/isupper and strlen
function compute_score(word){
    let score = 0;
    let index = 0;
    for (i = 0, n = word.length; i < n; i++){
        if (islower(word[i])){
            // printf("accounting for lower case\n");
            index = word[i]-'a';
        }
        if (isupper(word[i])){
            // printf("accounting for upper case\n");
            index = word[i]-'A';
        }
}}
    
compute_score("hello");

// utility functions
function add(x,y){
  let sum = x + y;
  let strng = $(sum);

//check if is upper
  function isupper(str){
    return str  === str.toUpperCase();
}

//check if is lower
function islower(str){
    return str  === str.toLowerCase();
}

//return points by taking the index of the Letter araay and put it into POINTS array to get the int value corresponding to the letter
function getPoints(letter){
    let index = Letters.indexOf(letter);
    return POINTS[index];
}

function computeScore(word){
    let score = 0;
    for (i = 0; n = word.length, i<n; i++){
        console.log("letter is " + word[i]);
        console.log("letter score is " + getPoints(word[i]).toLowerCase());
        score+= getPoints(word[i].toLowerCase());
        console.log(score);
    }
}

coputeScore("hello");

//going to return the index of the first occurrence of A
//if A is not present it will be -1
console.log("testing of something not in index " + Letters.indexOf[A]);

console.log(string.length);
console.log("the sum is ", sum);
}



function getInputValue() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    // Displaying the value
    output();
  }

  //gets the output and changes it to something
  function output(){
    document.getElementById("output").value = inputVal;
  }