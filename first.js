let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#Reset");
let clr=document.querySelector("#clear");
let newbtm=document.querySelector("#Newgame");
let msg=document.querySelector(".msg");
let winner=document.querySelector("#winner");
let turn=document.querySelector("#turn");
let ctn=document.querySelector("#continue");
let numO=document.querySelector("#numberO");
let numX=document.querySelector("#numberX");


let O=0;
let X=0;
let valO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       if(valO){
        box.innerText="O";
        valO=false;
        turn.innerText="X TURN"
       }
       else {
        box.innerText="X";
        valO=true;
        turn.innerText="O TURN"
       }
       box.disabled=true;
       checkWinner();
    });
    });


  const checkWinner=()=> 
  {
       for( let pattern of winpatterns)
       {
         
         let val1=boxes[pattern[0]].innerText;
         let val2=boxes[pattern[1]].innerText;
         let val3=boxes[pattern[2]].innerText;


           if(val1!="" &&val2!=""&&val2!="")
           {
             if(val1===val2&&val2===val3)
             { 
                msg.classList.remove("hide");
                winner.innerText="Congratulations! winner is "+ val1;
                if(val1=="O"){
                  O=O+1;
                  valO=true;
                  turn.innerText="O TURN"
               }
               else{
                  X=X+1;
                  valO=false;
                  turn.innerText="X TURN"
               }

                for( box of boxes){
                  box.disabled=true;
                  
                }
             }

           }

       }
   }

   newbtm.addEventListener("click",()=>{
      valO=true;
      turn.innerText="O TURN"
      boxes.forEach((box)=>{
      box.innerText=" "
      box.disabled=false; 
      msg.classList.add("hide");
      O=0;
      X=0;
      numO.innerText="O= "+ O;
      numX.innerHTML="X= "+ X;
   });
   });
   ctn.addEventListener("click",()=>{
      boxes.forEach((box)=>{
         box.innerText=" "
         box.disabled=false; 
      });
         msg.classList.add("hide");
         numO.innerText="O= "+ O;
         numX.innerHTML="X= "+ X;

   })
   rstbtn.addEventListener("click",()=>{
      boxes.forEach((box)=>{

      box.innerText=" "
      box.disabled=false;
       O=0;
      X=0;
      numO.innerText="O= "+ O;
      numX.innerHTML="X= "+ X;
   });
   });
   clr.addEventListener("click",()=>{
      boxes.forEach((box)=>{
      box.innerText=" "
      box.disabled=false;
   });
   });
   

  

