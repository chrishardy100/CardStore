const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Welcome to our store!'
let idx = 1
let speed = 400

writeText()

function writeText(){
  textEl.innerText = text.slice(0, idx)
  idx++
  if(idx>text.length){
    idx=1
  }
  setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => speed = 100/e.target.value)
