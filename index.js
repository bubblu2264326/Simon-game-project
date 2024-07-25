
var randomPattern=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
    $("level-title").text("level" +level);
    sequence();
    started=true;
    }
});
$(".btn").click(function(){

    var kpress=$(this).attr("id");
    userClickedPattern.push(kpress);
    animatePress(kpress);
     playSound(kpress);
     checkanswer(userClickedPattern.length-1);
     
});
function checkanswer(i){
    
    if(randomPattern[i]==userClickedPattern[i]){
        if(randomPattern.length==userClickedPattern.length){
        setTimeout(function () {
            sequence();
          }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over Press any key to restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();    }
  

}

function sequence(){
    started=true;
    level++;
    userClickedPattern=[];
    $("#level-title").text("Level " + level);
   var randomNumber=Math.floor(Math.random()*4);
   var randButton=$(".btn")[randomNumber].id;
  randomPattern.push(randButton);
   animatePress(randButton);
   
   playSound(randButton);
}







function animatePress(kpress){
    $("#"+kpress).addClass("pressed");
    setTimeout(function(){
      $("#"+kpress).removeClass("pressed");
    },100);
}

function playSound(kpress){
    var audio=new Audio("sounds/"+kpress+".mp3");
    audio.play();
}
function startOver(){
    level=0;
    randomPattern=[];
    started=false;
}
