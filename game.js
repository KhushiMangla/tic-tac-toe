
let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn")

// Player X & Player Y

let turnO ="true";

let winPatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

for (let box of boxes){
    box.addEventListener("click", ()=>{
        console.log("box has clicked");
       if (turnO){
        box.innerText= "X";
        turnO= false;
       }
       else{
        box.innerText= "O";
        turnO= true;
       }
       box.disabled= true; 
       
       checkWinner()// btn becomes unclickable;
    });
}

const checkWinner = ()=>{

    for (let pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
         let boxIdx1= boxes[pattern[0]].innerText;
         let boxIdx2=  boxes[pattern[1]].innerText;
         let boxIdx3=   boxes[pattern[2]].innerText;

         if (boxIdx1 !="" && boxIdx2 !="" && boxIdx3 !=""){
            if (boxIdx1=== boxIdx2 && boxIdx2===boxIdx3){
                console.log("winner is ", boxIdx1);
           
            }
         }
    }
}



