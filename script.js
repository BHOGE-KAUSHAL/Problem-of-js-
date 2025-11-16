// Level -1 practice of js 
// 7.ask user age and check if eligible to vote .
//   If age >=18 -> "Eligible ",else ->"not Eligible" 

// let age = prompt("user ki age batao");
// if (age === null ){
//     console.error("you cancelled it .");    
// }else {
//     if(age.trim() === ""){
//         console.error("please write something...");
//     }else{
//         age = Number(age);
//         if (isNaN(age)){
//             console.error("please enter the number ...");
//         }else{
//             if(age<0)console.error("put correct age");
//             else if(age >= 18) console.log("You can vote");
//             else console.log("you can't vote");
//         }  
//     }
// }

// 8. print multiplication table of 5 
// use loop to print 5 x 1 to 5 x 10 .
for (let i=0 ;i<11; i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// 9. count how many number between 1 and 15 greater than 8 
// loop and count conditionally
let count = null;
for (let i=1 ; i < 15 ;i++){
    if (i > 8 ) {
        ++count;
    }
}
console.log(`total count is ${count}`);

// 10. ask user for password and print access status hardcoded correct password. compare with user input

// let password = "spiderman";
// let pass = prompt("password bataio");
// if (pass === null){
//     console.error("you cancelled it ");
// }else {
//     if(pass === password){
//         console.log("matched");
//     }else{
//         console.log("not matched");
//     }
// }

// Level 2 - slightly tougher but logical 
// 11. allow only 3 attemps to enter correct password if user gets its right early ,stop. if not -> "Account Locked"  
// hint- pahla prompt ,galat ->doosra prompt ||| sahi hau -> stop hojayegaa, doosra prompt bhigalat -> 3 prompt -> account locked .     
// while loops pattern - 

//start
//while(end){
// ... /// your. code
//change
//} 

let attemps = 0;
let unlocked = false;
let pass = "kaushal";

let password =prompt("password - kaushal");
attemps++;

if (password === pass) unlocked = true;
while(password !== pass){
    if (attemps === 3){
        console.error("Account locked");
        break;
    }
    password =prompt ("password batao");
    if (password === pass) unlocked =true;
    attemps++;
}
if (unlocked === true) console.log("account opened ");