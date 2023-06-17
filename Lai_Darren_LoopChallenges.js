// 1
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 2
for (let i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// 3
let i = 4
while (i >= -3.5) {
  console.log(i);
  i = i - 1.5;
}

// 4
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// 5
let product = 1;
for (let i = 1; i <= 12; i++) {
  product = product * i;
}
console.log(product);