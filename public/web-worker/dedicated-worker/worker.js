
let connections = 0;
let executions = 0;

connections++;

self.addEventListener('message', e => {
  executions++
  self.postMessage([e.data, connections, executions])
}, false);