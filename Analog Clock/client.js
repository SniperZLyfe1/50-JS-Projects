const minuteLabel = document.querySelector('.hand.minute')
const hourLabel = document.querySelector('.hand.hour')
const secondsLabel = document.querySelector('.hand.second')

setInterval(() => runTime(), 1000)

function runTime(){
  const currentTime = new Date()
  let seconds = currentTime.getSeconds() / 60
  let minutes = (seconds + currentTime.getMinutes()) / 60
  let hours = (minutes + currentTime.getHours()) / 12
  secondsLabel.style.setProperty('--rotation', seconds * 360)
  minuteLabel.style.setProperty('--rotation', minutes * 360)
  hourLabel.style.setProperty('--rotation', hours * 360)
}

runTime()