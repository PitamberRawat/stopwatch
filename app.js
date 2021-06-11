let [millisec, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector(".timer");
let int;

document.querySelector(".start").addEventListener
('click', ()=>{
    int = setInterval(displayTimer,10);

});

document.querySelector(".reset").addEventListener
('click', ()=>{
    clearInterval(int);
    let [millisec, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = "00 : 00 : 00: 000"; 
})

document.querySelector(".pause").addEventListener
('click', ()=>{
    clearInterval(int);
})

function displayTimer(){
    millisec += 10;
    if(millisec == 1000){
        millisec = 0;
        seconds++;
    
         if(seconds == 60){
             seconds = 0;
             minutes++;

              if(minutes = 60){
                 minutes = 0;
                 hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;

}