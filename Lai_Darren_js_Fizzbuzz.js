let string = "";
for (let i = 1; i <= 100; i++) {
  string = i;
  if (i % 3 == 0 | i % 5 == 0) {
    string = "";
  }
  if (i % 3 == 0) {
      string = string + "Fizz";
    }
  if (i % 5 == 0) {
      string = string + "Buzz";
    }
  console.log(string);
}