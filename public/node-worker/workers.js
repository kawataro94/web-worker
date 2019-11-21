const { workerData, parentPort } = require('worker_threads')

console.log('Going to write tons of content on file ' + workerData);
parentPort.postMessage({ fileName: workerData, status: 'Done' })