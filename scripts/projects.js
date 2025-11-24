const overlay = document.getElementById("over");

const mythicalInfo = document.getElementById("md");
const mythicalInteract = document.getElementById("oM");
const mythicalPic = document.getElementById("mPic")

const boardInfo = document.getElementById("bd");
const boardInteract = document.getElementById("oB");
const boardPic = document.getElementById("bPic")

const reignInfo = document.getElementById("rd");
const reignInteract = document.getElementById("oR");
const reignPic = document.getElementById("rPic")

const sealInfo = document.getElementById("sd");
const sealInteract = document.getElementById("oS");
const sealPic = document.getElementById("sPic")

let mythIndex = 1;
let boardIndex = 1;
let reignIndex = 1;
let sealIndex = 1;

overlay.addEventListener("click", event => {
    overlay.classList.remove("active");
    mythicalInfo.classList.remove("active");
    boardInfo.classList.remove("active");
    reignInfo.classList.remove("active");
    sealInfo.classList.remove("active");
    document.body.classList.remove("stop-scrolling");
})

mythicalInteract.addEventListener("click", event => {
    overlay.classList.add("active")
    mythicalInfo.classList.add("active");
    document.body.classList.add("stop-scrolling");
    resetPics();
})

boardInteract.addEventListener("click", event => {
    overlay.classList.add("active")
    boardInfo.classList.add("active");
    document.body.classList.add("stop-scrolling");
    resetPics();
})

reignInteract.addEventListener("click", event => {
    overlay.classList.add("active")
    reignInfo.classList.add("active");
    document.body.classList.add("stop-scrolling");
    resetPics();
})

sealInteract.addEventListener("click", event => {
    overlay.classList.add("active")
    sealInfo.classList.add("active");
    document.body.classList.add("stop-scrolling");
    resetPics();
})

function mythSwitchNext(){
   mythIndex++;
   if (mythIndex >= 6) {
    mythIndex = 1;
   }
   mythSet();
}

function mythSwitchPrev(){
   mythIndex--;
   if (mythIndex <= 0) {
    mythIndex = 5;
   }
   mythSet();
}

function boardSwitchNext(){
   boardIndex++;
   if (boardIndex >= 6) {
    boardIndex = 1;
   }
   boardSet();
}

function boardSwitchPrev(){
   boardIndex--;
   if (boardIndex <= 0) {
    boardIndex = 5;
   }
   boardSet();
}

function reignSwitchNext(){
   reignIndex++;
   if (reignIndex >= 6) {
    reignIndex = 1;
   }
   reignSet();
}

function reignSwitchPrev(){
   reignIndex--;
   if (reignIndex <= 0) {
    reignIndex = 5;
   }
   reignSet();
}

function sealSwitchNext(){
   sealIndex++;
   if (sealIndex>= 6) {
    sealIndex = 1;
   }
   sealSet();
}

function sealSwitchPrev(){
   sealIndex--;
   if (sealIndex <= 0) {
    sealIndex = 5;
   }
   sealSet();
}

function mythSet(){
    switch (mythIndex) {
    case 5:
        mythicalPic.src = "../assets/projects/myth5.png"
        break;
    case 4:
        mythicalPic.src = "../assets/projects/myth4.png"
        break;
    case 3:
        mythicalPic.src = "../assets/projects/myth3.png"
        break;
    case 2:
        mythicalPic.src = "../assets/projects/myth2.png"
        break;
    default:
        mythicalPic.src = "../assets/projects/myth1.png"
        break;
   }
}

function boardSet(){
    switch (boardIndex) {
    case 4:
        boardPic.src = "../assets/projects/board3.png"
        break;
    case 3:
        boardPic.src = "../assets/projects/board3.png"
        break;
    case 2:
        boardPic.src = "../assets/projects/board2.png"
        break;
    default:
        boardPic.src = "../assets/projects/board1.png"
        break;
   }
}

function reignSet(){
    switch (reignIndex) {
    case 3:
       reignPic.src = "../assets/projects/reign3.png"
        break;
    case 2:
        reignPic.src = "../assets/projects/reign2.png"
        break;
    default:
        reignPic.src = "../assets/projects/reign1.png"
        break;
   }
}

function sealSet(){
    switch (sealIndex) {
    case 4:
        sealPic.src = "../assets/projects/seal4.png"
        break;
    case 3:
        sealPic.src = "../assets/projects/seal3.png"
        break;
    case 2:
        sealPic.src = "../assets/projects/seal2.png"
        break;
    default:
         sealPic.src = "../assets/projects/seal1.png"
        break;
   }
}

function resetPics()
{
    mythIndex = 1;
    boardIndex = 1;
    reignIndex = 1;
    sealIndex = 1;
    mythSet();
}

