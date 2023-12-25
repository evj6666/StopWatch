let minTag=document.getElementById("min");
let secTag=document.getElementById("sec");
let msecTag=document.getElementById("m-sec");
let startTag=document.getElementById("start-btn");
let stopTag=document.getElementById("stop-btn");
let resetTag=document.getElementById("reset-btn");

//start timer
let milesecond=0;
let second=0;
let miniute=0;
let b=false;
function startTimer()
{
    milesecond=milesecond+10;
    msecTag.innerText=milesecond;
    if(milesecond===1000)
    {
        milesecond=0;
        second=second+1;
        secTag.innerText=addzero(second);
        if(second === 60)
        {
            second=0;
            miniute+=1;
            minTag.innerText=addzero(miniute);
        }
    }

}
//start Timer
let id=null;
startTag.addEventListener('click',()=>{
    if(!b)
    {
     id= setInterval(startTimer,10);
     b=true;
    }

});
//stop Timer
stopTag.addEventListener('click',()=>{
    clearInterval(id);
});

//resert Timer
resetTag.addEventListener('click',()=>{
    clearInterval(id);
    msecTag.innerText="00";
    secTag.innerText="00";
    minTag.innerText="00";
    b=false;
    milesecond=0;
    second=0;
    miniute=0;
});


// it will no add Zero
function addzero(time)
{
    let str="";
    if(time<=9)
    {
       return str=str+"0"+time;
    }
    else{
        return time;
    }

}
