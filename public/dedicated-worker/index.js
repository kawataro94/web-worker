const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const connectionsNum = document.querySelector('.connections');
const executionsNum = document.querySelector('.executions');

// メインスレッド
const worker = new Worker('worker.js');
const worker2 = new Worker('worker.js');

worker.addEventListener("message", e => {
  console.log(e.data[0])
  connectionsNum.textContent = e.data[1];
  executionsNum.textContent = e.data[2];
}, false);

worker2.addEventListener("message", e => {
  console.log(e.data[0])
  connectionsNum.textContent = e.data[1];
  executionsNum.textContent = e.data[2];
}, false);

button.addEventListener('click', e => {
  worker.postMessage('post it')
})

button2.addEventListener('click', e => {
  worker2.postMessage('post it')
})