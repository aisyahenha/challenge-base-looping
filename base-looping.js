/*
Perulangan Sederhana

Problem
Pada tugas ini kamu diminta untuk mencari total bilangan yang habis di bagi 3

Kriteria
const number = [1, 3, 4, 5, 6, 9, 12, 15, 25, 125, 225, 300];

Output
570
*/

const number = [1, 3, 4, 5, 6, 9, 12, 15, 25, 125, 225, 300];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] % 3 == 0) {
    sum += number[i];
  }
}

console.log(sum);
