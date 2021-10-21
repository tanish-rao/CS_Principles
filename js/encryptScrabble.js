//Objective: take a message from user and encrypt it. Then use a cypher and decrypt it.

/* 1. get input from user
    2. check if is upper or if is lower while going throuhg the array
        a. If lower, convert to upper.
        b. If upper, run fnction to change letter based on ASCII value
    3. For space, change space to an "&"
    4. Include decryption fucntion that runs reverse process on decrypted message
*/

// initiate variables necessary for the functions
let encryptedMessage = [];
let encryptedLetter = "a ";
//this will be the encrypted phrase
let newWord = "";
//this will be the decrypted word (original phrase)
let oldWord = "";

//function gets the phrase for encryption from the user
function getEncryptValue(){
    return document.getElementById("inputId").value;
}

//function gets the phrase for decryption from the user
function getDecryptValue(){
    return document.getElementById("inputId2").value;
}

//function encrypts the users phrase
function encrypt(word){
    //this is to reset the encrypted word every time the function runs
    newWord = "";
    for (i = 0, n = word.length; i<n; i++){
        if (islower (word[i]) || isupper (word[i])){
            //using ascii code to encrypt the letters
            encryptedLetter = String.fromCharCode(word[i].charCodeAt(word[i]) - 25);
        }   
        //in case there is a space in the phrase that the isupper islower function cannot account for
        else if (word[i] == " "){
            encryptedLetter = "&";
        }
        else{
            alert("Please use letters and spaces only");
        }
        //add the encrypted letter into the array
        encryptedMessage.push(encryptedLetter);
        //add the encrypted letter to the encrypted word
        newWord = newWord + encryptedLetter;
    }
    //log the encrytpted word in the console
    console.log("The orginal word is " + word + ". The encrypted word is " + newWord);
    //display the encrypted word on the website
    changeEncryptedLabel("Encrypted Phrase: " + newWord);
    return newWord;
}

//function decrypts user's encrypted phrase
function decrypt(word){
    // reset original phrase every time the function runs
    oldWord = "";
    for (i = 0, n = word.length; i<n; i++){
        if (word[i] == "&"){
            //for spaces in the phrase
            decryptedLetter = " ";
        }
        else{ 
            //using ascii code to do the reverse process and change letters back
            decryptedLetter = String.fromCharCode(word[i].charCodeAt(word[i]) + 25);
        }
        //ass the decrypted letter to the decrypted phrase each time   
        oldWord = oldWord + decryptedLetter;
    }
    // log the decrypted value in the console
    console.log("The decrypted word is " + word + ". The decrypted word is " + oldWord);
    //display decrypted word on the website
    changeDecryptedLabel("Decrypted Phrase: " + oldWord);
    return oldWord;
}

//function that runs when "Encrypt" button is pressed
function encryptClick(){
    let encryptedValue = encrypt(getEncryptValue());
    //gets encrypt phrase by calling on encrypt function
    console.log(newWord);
}   

//function that runs when "Decrypt" button is pressed
function decryptClick(){
    let decryptedValue = decrypt(getDecryptValue());
    //gets the decrypted phrase by calling on decrypt function
    console.log(oldWord);
}   

//function to display Encrypted phrase
function changeEncryptedLabel(content){
    document.getElementById("encryptedDisplay1").innerHTML = content;
}

//function to display decrypted phrase
function changeDecryptedLabel(content){
    document.getElementById("decryptedDisplay2").innerHTML = content;
}

//function to check if is upper/helps prove that str is a char, not something else
function isupper(str) {
    return str === str.toUpperCase();
}
  
  // check if is lower/helps prove that str is a char, not something else
function islower(str) {
    return str === str.toLowerCase();
}

