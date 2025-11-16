// Level 1 
//1. print number from 1 to 10 .
//hint-loop from 1 to 10 and print each other

// for(i=1;i<11;i++){
// console.log(i);
// }

//2. print only even number from 1 to 20 
// use a loop and conditional to print only even ones. 

for(i=1;i<21;i++){
    if(i%2 ===0){
        console.log(i);
    }
}

//3. print number from 10 to 1 .
//reverse loop with a decrement

// for (i=10;i>0;i--){
//     console.log(i);
// }

//4. print the word "yes " 5 times .
//repeat using a loop 

for(let j=0;j<5; j++ ){
    console.log("yes");
}

//5. print whether number from 1 to 10 are even or odd .
// for each number ,check:even -> "Even", else->"odd" 

for(k=1;k<11;k++){
    if(i % 2 ===0){
        console.log(`${k} Even`);
    }else{
        console.log(`${k} Odd`);
    }
}

// 6. ask user for a number say if it's positive or negative.
// use prompt and conditional 
// convert string into number // number(),parseInt(),+
let num = +prompt("number batao");
if (num >= 0){
    console.log("positive");
}else{
    console.log("negative");
}