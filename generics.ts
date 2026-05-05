interface Store<T> {
  get(id: string): T;
  save(id: string, item: T): void;
  list(): T[];
}

function addAndGetItems<T>(store: Store<T>, id: string, newItem: T): T[] {
  store.save(id, newItem);
  return store.list();
}

// type Product = {
//   name: string;
//   price: number;
// };

const productStore = {
  products: {} as Record<string, V>,
  get(id: string): V {
    return this.products[id];
  },
  save(id: string, item: V): void {
    this.products[id] = item;
  },
  list(): V[] {
    return Object.values(this.products);
  },
};

const newStore = addAndGetItems(productStore, "laneslaptop", {
  name: "Laptop",
  price: 999,
});
console.log(newStore);
// [{ "name": "Laptop", "price": 999 }]
const finalStore = addAndGetItems(productStore, "allanstoaster", {
  name: "Toaster",
  price: 50,
});
console.log(finalStore);
// [{ "name": "Laptop", "price": 999 }, { name: 'Toaster', price: 50 }]

const newHomunculus = addAndGetItems(productStore, "laneslaptop", {
  title: "Laptop",
  abilities: ["fast", "strong"],
});
console.log(newHomunculus);
// [{ "title": "Laptop", "abilities": ["fast", "strong"] }]
