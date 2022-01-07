const clock = document.querySelector(".clock");
const hours = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const apm = document.querySelector(".apm");
const day = document.querySelector(".day");
const tarik = document.querySelector(".date");




setInterval(function () {

    let date = new Date();
    let h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let din = date.getDay();
    
    day.innerHTML = week(date.getDay());
   
    hours.innerHTML = `${zero(h)}`; 
    min.innerHTML = `:${zero(m)}`;
    sec.innerHTML = zero(s);
    apm.innerHTML = date.getHours() > 12 ? "pm" : "am";

    tarik.innerHTML = `${zero(date.getDate())}/${zero(date.getMonth() == date.getMonth() ? date.getMonth() + 1 : date.getMonth()) }/${date.getFullYear()}`
    //  

console.log(din);
}, 1000)