const toys = [
  {
    id: 1,
    name: "Teddy Bear",
    totalStock: 5,
    inStock: true,
    price: 12.25,
  },
  {
    id: 2,
    name: "Racecar",
    totalStock: 12,
    inStock: true,
    price: 21.25,
  },
  {
    id: 3,
    name: "Doll House",
    totalStock: 0,
    inStock: false,
    price: 25.25,
  },
];

const lego = {
  id: 4,
  name: "Lego",
  totalStock: 23,
  inStock: true,
  price: 8.75,
};

const football = {
  id: 5,
  name: "Football",
  totalStock: 4,
  inStock: true,
  price: 14.5,
};

toys.push(lego, football);

//* Bk2 Ch8
//
// for (const toy of toys) {
//   toy.price = toy.price * 1.05;
//   console.log(`
//     There are ${toy.totalStock} ${toy.name}s in stock! Priced at $${toy.price}ea.
//     `);
// }

//* Bk2 Ch9
//
// const toyToFind = 4
// for (const toy of toys) {
//   if (toy.id === toyToFind) {
//     toy.price = toy.price * 1.05;
//     console.log(`The ${toy.name} costs ${toy.price}. There are ${toy.totalStock} in stock.`)
//   }
// }
//
//
//* Bk2 Ch10
//
const addToyToInventory = (toyObject) => {
  const lastIndex = toys.length - 1;
  const currentLastToy = toys[lastIndex];
  const maxId = currentLastToy.id;
  const idForNewToy = maxId + 1;
  toyObject.id = idForNewToy;
  toys.push(toyObject);
};

const playingCards = {
  name: "Playing Card",
  totalStock: 30,
  inStock: true,
  price: 4,
};

addToyToInventory(playingCards);

for (const toy of toys) {
  toy.price = toy.price * 1.05;
  console.log(`
       There are ${toy.totalStock} ID:${toy.id} ${toy.name}s in stock! Priced at $${toy.price}ea.
       `);
}
