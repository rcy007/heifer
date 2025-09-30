async function fetchProducts() {

  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
console.log("4356");



// async function fetchProducts() {
//   try {
//     // after this line, our function will wait for the `fetch()` call to be settled
//     // the `fetch()` call will either return a Response or throw an error
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the parsed JSON object or throw an error
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const promise = fetchProducts();
// promise.then((data) => console.log(data[0]['name'])); // 


// try {
//   // using await outside an async function is only allowed in a module
//   const response = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//   }
    

//   const data = await response.json();
//   console.log(123);
//   console.log(data[0].name);
  
// } catch (error) {
//   console.error(`Could not get products: ${error}`);
//   throw error;
// }

function log(msg) {
  console.log(`${new Date().toISOString()} | ${msg}`);
}

try {
  log("Before fetch");

  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  console.log(123);
  log("After fetch, before checking ok");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  log("Before response.json()");

  const data = await response.json();

  log("After response.json(), before console.log(123)");

  

  log("After console.log(123), before data[0].name");

  console.log(data[0].name);

  log("After console.log(data[0].name)");

} catch (error) {
  console.error(`Could not get products: ${error}`);
  throw error;
}

