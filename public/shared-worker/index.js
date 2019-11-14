const button = document.querySelector('#button');
const connectionsNum = document.querySelector('.connections');
const executionsNum = document.querySelector('.executions');

const worker = new SharedWorker("worker.js");

worker.port.start();
worker.port.addEventListener("message", e => {
  console.log(e.data[0])
  connectionsNum.textContent = e.data[1];
  executionsNum.textContent = e.data[2];
}, false);

// post a message to the shared web worker
button.addEventListener("click", e => {
  worker.port.postMessage("post it");
}, false);





