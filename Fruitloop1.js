/*Fruitloop2

Repeat Fruitloop1, but for each fruit name that you display, on the next line display the number of periods that is equal to the number of the index of the array.

Example: "Banana" . //one period

"Orange" .. //two periods etc. */

let くだもの	 = [
'はらり', ".",
'カキ', "..",
'パパイヤ', "...",
'きいちご', "....",
'ざくろ', ".....",
'ゆず', "......"
];

for (let i = 0; i < くだもの.length; i++) {
  const output = くだもの[i]; 
  console.log(output); 
}
