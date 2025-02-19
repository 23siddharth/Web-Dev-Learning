// document.querySelector("button").addEventListener("click", HandleClick);
// document.querySelector("button").addEventListener("click", function(){alert("hi")});
//this is an anonymous function
//dont add parenthesis....you dont want function call manually...let eventlistener do it.


// function HandleClick()
// {
//     alert("I got clicked");
// }

// var arr=document.querySelectorAll(".drum");
// for( var i=0; i<arr.length;i++)
//     arr[i].addEventListener("click", HandleClick);


//function add(..){...}
//function calculator (num1, num2, operator)
// {
//     operator(num1,num2);
// }
//calculator(4,5,add);

//debugger; //hold shift press enter
//function call;

// var s=[ "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4",  "crash" ];
// function HandleClick()
// {
//     var button=this.innerHTML; //this gives the element which triggers the eventlistener...in this case the button
//     var i;
//     switch (button) {
//         case "w": i=0;
//             break;
//         case "a": i=1;
//             break;
//         case "s": i=2;
//             break;
//         case "d": i=3;
//             break;
//         case "j": i=4;
//             break;
//         case "k": i=5;
//             break;
//         case "l": i=6;
//             break;
//         default:
//             break;
//     }
//     // var audio=new Audio("./sounds/crash.mp3");
//     // audio.play();
//     new Audio("./sounds/"+s[i]+".mp3").play();
// }

// var arr=document.querySelectorAll(".drum");
// for( var i=0; i<arr.length;i++)
//     arr[i].addEventListener("click", HandleClick);

// .document.addEventListener("keypress", ) 
// at this point i am making a function which will be common for both click and keypress.

var s=[ "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4",  "crash" ];
function HandleClick()
{
    var keyy=this.innerHTML; //this gives the element which triggers the eventlistener...in this case the button
    key_sound(keyy);
    animate(keyy);
}

var arr=document.querySelectorAll(".drum");
for( var i=0; i<arr.length;i++)
    arr[i].addEventListener("click", HandleClick);

function key_sound(keyy)
{
    var i;
    switch (keyy) {
        case "w": i=0;
            break;
        case "a": i=1;
            break;
        case "s": i=2;
            break;
        case "d": i=3;
            break;
        case "j": i=4;
            break;
        case "k": i=5;
            break;
        case "l": i=6;
            break;
        default:
            break;
    }
    // var audio=new Audio("./sounds/crash.mp3");
    // audio.play();
    new Audio("./sounds/"+s[i]+".mp3").play();
}
document.addEventListener("keypress", HandleKey);//keypress works fineee

function animate(keyy)
{
    var element=document.querySelector("."+keyy);
    element.classList.add("pressed");
    setTimeout( function (){element.classList.remove("pressed");},100);
}
function HandleKey(event)
{
    var keyy=event.key;
    key_sound(keyy);
    animate(keyy);
}