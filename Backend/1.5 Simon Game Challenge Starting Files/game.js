var pattern=[];
var col=["red","blue","green","yellow"];
var started=false;
var lev=0;
var i=0;
$(".btn").click(function(){
    var button=$(this).attr("id");
    $("#"+button).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#"+button).addClass("pressed");
    playSound(button);
    setTimeout( function(){
        $("#"+button).removeClass("pressed");
    } , 100)
    if(!started)
        return;

    if( pattern[i]==button )
        {
            if(pattern.length==i+1)
            {
                setTimeout( nextSeq, 1000);
            }
            i++;
        }
        else
        {
            gameover();
        }
} )

function nextSeq()
{
    if(!started)
        return;
    lev++;
    var rn=(Math.floor(Math.random()*3));
    var nextCol=col[rn];
    pattern.push(nextCol);
    i=0;
    $("h1").text("Level-"+lev);
    $("#"+nextCol).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(nextCol);
}
$(document).keypress( function(){
    if(!started)
    {
        started=true;
        nextSeq();
    }
})

function playSound(s)
{
    var audio= new Audio("./sounds/"+s+".mp3");
    audio.play();
}

function gameover()
{
    started=false;
    lev=0;
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").html("Game-Over </br> </br> 'Press A Key to Restart' ");
    pattern=[];
    i=0;
    setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
}
