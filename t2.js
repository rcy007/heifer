console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
(async () => {
  console.log('D');
  await null; // queues a microtask for the continuation below
  console.log('E');
})();
console.log('F');