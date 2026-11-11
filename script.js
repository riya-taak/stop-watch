
let secCount = 1;
let minCount = 1;
let hourCount = 1;

let timId = null;

document.getElementById('secTime').innerHTML = "00";
document.getElementById('minTime').innerHTML= "00";
document.getElementById('hourTime').innerHTML= "00";

function correct(x){
  if(x === 60) return "00";
  return x < 10 ? "0" + x : x;
}

function timer(){
  timId = setInterval(()=>{
    
    if(secCount===60){
      secCount = 0;
      document.getElementById('minTime').innerHTML= correct(minCount++);
    }

    if(minCount===61 && secCount === 0){
      minCount = 1;
      document.getElementById('hourTime').innerHTML= correct(hourCount++);
    }

    document.getElementById('secTime').innerHTML = correct(secCount++);

    if(hourCount === 13){
      clearInterval(timId);
      reset();
      return;
    }

  },1000)
}

timer();

const stopFun = () => {
  clearInterval(timId);
  timId = null;
}

function reset(){
  secCount = 0;
  minCount = 0;
  hourCount = 0;

  document.getElementById('secTime').innerHTML = "00";
  document.getElementById('minTime').innerHTML= "00";
  document.getElementById('hourTime').innerHTML= "00";
}

function resume(){
  if(timId===null){
    timer();
  }
}

let stopBtn = document.getElementById("btn");
stopBtn.addEventListener("click", stopFun);

let resetBtn = document.getElementById("res_btn");
resetBtn.addEventListener("click",reset);

let resumeBtn = document.getElementById("resume_btn");
resumeBtn.addEventListener('click',resume);

