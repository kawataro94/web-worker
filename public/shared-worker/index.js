const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const connectionsNum = document.querySelector('.connections');
const executionsNum = document.querySelector('.executions');

const worker = new SharedWorker("worker.js");
const worker2 = new SharedWorker("worker.js");

worker.port.start();
worker2.port.start();

worker.port.addEventListener("message", e => {
  console.log(e.data[0])
  connectionsNum.textContent = e.data[1];
  executionsNum.textContent = e.data[2];
});

worker2.port.addEventListener("message", e => {
  console.log(e.data[0])
  connectionsNum.textContent = e.data[1];
  executionsNum.textContent = e.data[2];
});

button.addEventListener("click", e => {
  worker.port.postMessage("post it");
});

button2.addEventListener("click", e => {
  worker2.port.postMessage("post it");
});





