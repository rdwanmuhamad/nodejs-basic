// console.log('Hello World!');

// function tambah(a,b){
//     return a + b
// }

// console.log(tambah(10, 5));

// module built in

// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("text.txt was copied to text2.txt");

// npm module

const superhero = require("superheroes");

for (let i = 0; i < 10; i++) {
  const nameHero = superhero.random();
  console.log(nameHero);
}
