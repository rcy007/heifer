const helloPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});
const worldPromise = new Promise((resolve, reject) => {
  resolve('World!');
});

// helloPromise.then((msg) => console.log(msg))+' '+worldPromise.then((msg) => console.log(msg));


helloPromise.then((msg1) => {
  worldPromise.then((msg2) => console.log(msg1+' '+msg2))
})



// console.log('-----------------------\n\n-----------------------');

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

console.log("-----------------------\n\n-----------------------");

// const fetchPromise = fetch(
//   "https://mdn.github.lala.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise.then((response) => {
//     const jsonResponse = response.json();
//     jsonResponse.then((response) => {
//         console.log(response[0].name);
//     })
// })

// const mylist = "123";
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name))
//   .catch(() => console.log("There was some error!"))


  
