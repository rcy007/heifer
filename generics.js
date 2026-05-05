function addAndGetItems(store, id, newItem) {
    store.save(id, newItem);
    return store.list();
}
// type Product = {
//   name: string;
//   price: number;
// };
var productStore = {
    products: {},
    get: function (id) {
        return this.products[id];
    },
    save: function (id, item) {
        this.products[id] = item;
    },
    list: function () {
        return Object.values(this.products);
    },
};
var newStore = addAndGetItems(productStore, "laneslaptop", {
    name: "Laptop",
    price: 999,
});
console.log(newStore);
// [{ "name": "Laptop", "price": 999 }]
var finalStore = addAndGetItems(productStore, "allanstoaster", {
    name: "Toaster",
    price: 50,
});
console.log(finalStore);
// [{ "name": "Laptop", "price": 999 }, { name: 'Toaster', price: 50 }]
var newHomunculus = addAndGetItems(productStore, "laneslaptop", {
    title: "Laptop",
    abilities: ["fast", "strong"],
});
console.log(newHomunculus);
// [{ "title": "Laptop", "abilities": ["fast", "strong"] }]
