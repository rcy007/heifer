// Learning advanced loops, filters, maps, etc

"use strict";

let base = [1,2,3];

base.forEach((value) => {
  console.log(value);
});
// Expected output:
// 1
// 2
// 3

const letters = ["a", "b", "c"];

letters.forEach((letter, idx) => {
  console.log(`${idx}: ${letter.toUpperCase()}`);
});
// Expected output:
// 0: A
// 1: B
// 2: C

const cartTotals = [];
const cartItems = [
  { name: "laptop", price: 899, quantity: 1 },
  { name: "mouse", price: 49, quantity: 2 },
  { name: "monitor", price: 199, quantity: 1 },
];

cartItems.forEach((item) => {
  const lineTotal = item.price * item.quantity;
  cartTotals.push(
    { name: item.name, lineTotal}
  );
});
console.log(cartTotals);
// Expected output:
// [
//   { name: 'laptop', lineTotal: 899 },
//   { name: 'mouse', lineTotal: 98 },
//   { name: 'monitor', lineTotal: 199 }
// ]

const orders = [
  {
    id: 101,
    items: [
      { sku: "BOOK-01", price: 29.99, qty: 2 },
      { sku: "PEN-99", price: 1.5, qty: 4 },
    ],
  },
  {
    id: 102,
    items: [
      { sku: "USB-21", price: 15.0, qty: 3 },
      { sku: "BAG-20", price: 45.0, qty: 1 },
    ],
  },
];

orders.forEach((order) => {
  const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Order #${order.id} total: $${total.toFixed(2)}`);
});
// Expected output:
// Order #101 total: $64.98
// Order #102 total: $90.00

const statusById = new Map([
  ["A12", "pending"],
  ["B34", "shipped"],
  ["C56", "delivered"],
]);

statusById.forEach((status, id) => {
  console.log(`${id} -> ${status}`);
});
// Expected output:
// A12 -> pending
// B34 -> shipped
// C56 -> delivered

/*

--------
flatmap()
--------

*/

const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);

