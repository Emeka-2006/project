/*
                                   LOOP
Loops are essential for handling repetitive task efficiently.

                                   Types of LOOP
1) For LOOP
2) While LOOP
3) D0 while LOOP
4) For in LOOP
5) For of LOOP
*/

/*for (intialization; CSSConditionRule; update) {
    //CODE TO EXECUTE
}*/

//INTIALIZATION SETS THE STARTING POINT
//CONDITION => DECIDES HOW LONG THE LOOP RUNS
//UPDATE => CHANGES THE VARIABLE AFTER EACH LOOP ITERATION

for (let i = 0; i <= 5 ; i++)/* ++ => increment, -- => decrement*/{
    console.log("number:", i);
}

//START: let i = i start at 1
//check conditions: 1 <= 5; (if true, continue; if false, stop)
//run code: console.log("Number:", 1) prints the current i.
//update: i++ (Increase i by 1)
//repeat: GO BACK TO STEP 2 UNTIL I BECOMES
// 6(CONDITION BECOMES FALSE)

for (let a = 2; a <= 10 ; a += 2)/* ++ => increment, -- => decrement*/{
    console.log(a);
}

for (let b = 4; b >= 1; b--)/* ++ => increment, -- => decrement*/{
    console.log(b);
}


//while (condition){}

let x = 1;  //start
while (x <= 5) { //condition
    console.log("count:", x);
    x ++ //update
}

/*let answer = " ";
while (answer !== "yes"){
    answer = prompt ("type 'yes' to exit")// asking user for an input
}
console.log("You typed 'yes' existing");*/


for (let g = 1; g <= 10 ; g++)/* ++ => increment, -- => decrement*/{
    console.log("g:", g);
}

for (let c = 2; c <= 20; c += 2)
    console.log("c:", c);

for (let a = 1; a<=50; a++)
    console.log("a", a);
    
    


