const helloPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});
const worldPromise = new Promise((resolve, reject) => {
  resolve('World!');
});

// helloPromise.then((msg) => console.log(msg))+' '+worldPromise.then((msg) => console.log(msg));


// helloPromise.then((msg1) => {
//   worldPromise.then((msg2) => console.log(msg1+' '+msg2))
// })



// console.log('-----------------------\n\n-----------------------');

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// console.log("-----------------------\n\n-----------------------");

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise.then((response) => {
//     const jsonResponse = response.json();
//     jsonResponse.then((response) => {
//         console.log(response[0].name);
//     })
// })

// console.log('This should run first');

// const mylist = "123";
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name))
//   .catch(() => console.log("There was some error!"))

console.log("-----------------------\n\n-----------------------");


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//   console.log("wait...");
//   await sleep(5000);
//   console.log("done!");
// }
  
// demo();

// console.log("-----------------------\n\n-----------------------");

// function waitForMessage() {
//   return new Promise((resolve, reject) => {
//     console.log("Starting async work...");

//     // simulate async work (e.g. network call, DB query, etc.)
//     setTimeout(() => {
//       resolve("✅ Message arrived!");
//     }, 2000); // resolves after 2 seconds
//   });
// }

// // Usage
// waitForMessage().then(msg => console.log(msg));

// console.log("I can still do other stuff while waiting...");


import { readFile } from "fs";

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise("./hello.txt")
  .then(content => console.log("✅ File loaded:", content))
  .catch(err => console.error("❌ Error:", err.message));

console.log("This runs immediately, while the file is being read...");

