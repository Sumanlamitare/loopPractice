for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "Fizz Buzz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else {
    console.log(i, "Not divisible by 3 or 5");
  }
}

console.log("Next prime number after the given N");

let n = 7;

for (let i = n + 1; ; i++) {
  let isPrime = true;
  for (let z = 2; z < i; z++) {
    if (i % z === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && i > 1) {
    console.log(
      i,
      `Is the next prime number after ${n}
    `
    );
    break;
  }
}
