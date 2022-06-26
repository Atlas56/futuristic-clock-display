setInterval(setClock,1000)
const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')
const gear=document.querySelector('.gear')

function setClock(){
    const currentDate=new Date()
    const secondsRatio=currentDate.getSeconds()/60
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60
    const hoursRatio=(minutesRatio+currentDate.getHours())/12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

setClock()
setInterval(function(){
const timeDigitalWatch=document.querySelector('.timeDigitalWatch')
const digiwatch=document.querySelector('.digiwatch')
const aMpM=document.querySelector('.ampm')
let time=new Date()
let sec=time.getSeconds()
let min=time.getMinutes()
let hr=time.getHours()
let day='AM'
if(hr>12){
    day='PM'
    hr=hr-12;
}
if(hr==0){
    hr=12;
}
if(sec<10){
  sec ='0'+sec;
}
if(min<10){
    min ='0'+min;
  }
  if(hr<10){
    hr ='0'+hr;
  }


aMpM.textContent=day
digiwatch.textContent=sec
timeDigitalWatch.textContent=hr+':'+min+'';
});
const dayWeek=document.querySelector('.dayWeek')
const today=new Date()
let day=today.getDay()
if(day===1){
  dayWeek.textContent='MON'
}else if(day===2){
  dayWeek.textContent='TUE'
}else if(day===3){
  dayWeek.textContent='WED'
}else if(day===4){
  dayWeek.textContent='THUR'
}else if(day===5){
  dayWeek.textContent='FRI'
}else if(day===6){
  dayWeek.textContent='SAT'
}else if(day===7){
  dayWeek.textContent='SUN'
}
