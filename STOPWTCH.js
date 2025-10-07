let Count=1000;
let Millis=0;
let Seconds,Minutes,Hours;
let State=false;
let Value=document.getElementById("Value");
let setValue;
let DisplaySeconds;
let Border=document.getElementById("Circle");
function MilliSeconds_Counter(){
    Millis+=1000;
    StopWatch();
}

function StopWatch(){
  Seconds=Math.floor(Millis/1000);
  DisplaySeconds=Seconds%60;
  Minutes=Math.floor(Seconds/60);
  Hours=Math.floor(Minutes/60);
 console.log(`MilliSeconds: ${Millis}  Seconds: ${Seconds.toFixed(2)} Minutes: ${Minutes.toFixed(2)} Hours: ${Hours.toFixed(2)}`);
 Value.innerText= ` ${DisplaySeconds.toString().padStart(2, '0')} : ${(Minutes%60).toString().padStart(2, '0')} : ${(Hours%60).toString().padStart(2, '0')}`;
 if(DisplaySeconds>=55) {
    Border.style.borderColor="red";
 }

 else{
    Border.style.borderColor="green";
 }
}
//jhv

function Restart(){
   clearInterval(setValue);
  Value.innerText= " 00   :   00  :   00  " ;
  Millis=0;
}

function Start_Stop(){

    State=!State;
    if(State===true){
        setValue=setInterval(MilliSeconds_Counter,Count); 
    }
    else if(State===false){
        clearInterval(setValue);
    }

}
 