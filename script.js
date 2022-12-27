let turn="X"
let player1=prompt("PLAYER 1 ENTER YOUR NAME")
let player2=prompt("PLAYER 2 ENTER YOUR NAME")
let ans=0;
let count=0;
const changeturn=()=>{
    return turn==="X"?"O":"X"
}
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,1,3,0],
        [3,4,5,1,12,0],
        [6,7,8,1,22,0],
        [0,3,6,-7.4,13,90],
        [1,4,7,1,12,90],
        [2,5,8,6,10,-45],
        [0,4,8,1,12,46],
        [2,4,6,2,12,-45],
    ]
    wins.forEach(e=>{
if((boxtexts[e[0]].innerHTML===boxtexts[e[1]].innerHTML)&&(boxtexts[e[1]].innerHTML===boxtexts[e[2]].innerHTML)&&(boxtexts[e[0]].innerHTML!=='')){
    if(boxtexts[e[0]].innerHTML==="X"){
    document.querySelector(".info").innerHTML=player1+" "+"won";
    document.querySelector(".line").classList.add("fade-in-text")
    document.querySelector(".line").style.width='23.6vw';
    document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
     ans=1;
    }else if(boxtexts[e[0]].innerHTML==="O"){
    document.querySelector(".info").innerHTML=player2+" "+"won";
    document.querySelector(".line").style.width='23.6vw';
    document.querySelector(".line").style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
    ans=1;
    
}
}
    })
}


let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext=Element.querySelector(".boxtext");
    Element.addEventListener('click',myfunction);
    function myfunction(){
if(boxtext.innerHTML==='' && ans==0){
    boxtext.classList.add("fade-in-text")
    count++;
    boxtext.innerHTML=turn;
   turn= changeturn();
   checkwin();
   if(count==9 && ans==0){
    document.querySelector(".info").innerHTML="Draw";
}
}
    }
    })

   
 
   