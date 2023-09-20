var randomNumToHit;
var userHitbubble;
var score=0;
var timer=60;
var started=false;

function makeBubble(){
    var clut="";
for(let i=0;i<168;i++){
   var randomNumber=Math.floor((Math.random())*10);
clut+=(`<div class="bubble">${randomNumber}</div>`);
}
$(".pbottom").html(clut);
}
function Timer(){ 
    var timerEnd = setInterval(function(){
    if(timer>0){
        timer--;
        $(".timer").html(timer);}
        else{
            clearInterval(timerEnd);
            $(".pbottom").html("<h1>Game Over,Press Any key to start.</h1>")
            started=false;
        }
    },1000)}


function randomHit(){
    randomNumToHit=Math.floor((Math.random())*10);
    $(".Hit").html(randomNumToHit);
}
function increaseScore(){
    $(".Score").text(score+=10)
}

$("body").keydown(function(){
started=true;
if(started==true){
    Timer();
    makeBubble();
    randomHit();
    document.querySelector(".pbottom").addEventListener("click",function(det){
        userHitbubble=Number((det.target.textContent));
        if(userHitbubble===randomNumToHit){
            increaseScore()
            randomHit()
            makeBubble()
        }})
        timer=60;
        score=0;
        $(".Score").text(score);
}
})




