let DATE = document.querySelector(".timestamp");
let dt = new Date();
DATE.innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2))+" "+"EST";
let BACK = document.querySelector(".back");
let HOME = document.querySelector(".home");
let TVRoom = document.querySelector(".TVRoom");
let TV = document.querySelector(".tv");
let TheBigRoom = document.querySelector(".TheBigRoom");
let BIG = document.querySelector(".big");
let FAM = document.querySelector(".fam");
let FAMILY = document.querySelector(".Family");
let ABOUT = document.querySelector(".About");
let EXH = document.querySelector(".Exhibition");
let EXHimg = document.querySelector(".gallery");
let A = document.querySelector(".Accessories");
let Aimg = document.querySelector(".accessories");
let UNT = document.querySelector(".Untitled");
let UNTimg = document.querySelector(".unt");
let DISP = document.querySelector(".disparait");

ABOUT.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.remove("cache");
    BIG.classList.add("cache");
    FAM.classList.add("cache");
    EXHimg.classList.add("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.add("cache"); 
    BACK.classList.add("cache");
})

EXH.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.add("cache");
    BIG.classList.add("cache");
    FAM.classList.add("cache");
    EXHimg.classList.remove("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.add("cache");
    BACK.classList.add("cache");
})

TVRoom.addEventListener("mouseover", function(){
    TV.classList.remove("cache");
    HOME.classList.add("cache");
    BIG.classList.add("cache");
    FAM.classList.add("cache");
    EXHimg.classList.add("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.add("cache");
    BACK.classList.add("cache");
})

FAMILY.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.add("cache");
    BIG.classList.add("cache");
    FAM.classList.remove("cache");
    EXHimg.classList.add("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.add("cache");
    BACK.classList.add("cache");
})

TheBigRoom.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.add("cache");
    BIG.classList.remove("cache");
    FAM.classList.add("cache");
    EXHimg.classList.add("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.add("cache");
    
})

A.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.add("cache");
    BIG.classList.add("cache");
    FAM.classList.add("cache");
    Aimg.classList.remove("cache");
    UNTimg.classList.add("cache");
    
})

UNT.addEventListener("mouseover", function(){
    TV.classList.add("cache");
    HOME.classList.add("cache");
    BIG.classList.add("cache");
    FAM.classList.add("cache");
    Aimg.classList.add("cache");
    UNTimg.classList.remove("cache");
    
})
