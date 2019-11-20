let connections = 0;
let executions = 0;

self.addEventListener("connect", e => {

  const port = e.ports[0];
  connections++;

  port.addEventListener("message", e => {
    executions++
    port.postMessage([e.data, connections, executions]);
  });

  port.start();

});



