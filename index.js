// // ---->  DATE: 28/08/2024 <---



// 1) input: [23, 33, 200, 785]
// output:  30


arr = [23, 33, 200, 785];
uni = "";
dup = "";
for (i of arr) {
  x = String(i).split("").map(Number);
  emp = [];
  for (g of x) {
    if (!emp.includes(g)) {
      emp.push(g);
    }
  }
//   console.log(emp);
  for (i of emp) {
    c = 0;
    for (j of x) {
      if (i == j) {
        c++;
      }
    }
    if (c == 1) {
      uni += i;
    } else {
      dup += i;
    }
  }
}
console.log("1) WAP to print duplicate from given number and concat the value");
console.log(dup);



//   2) problem 

// 2) input: [ 538, 111, 200, 652]
// output:   [ false, false, false, true]





arr = [538, 111, 200, 652];
res = [];
for (i of arr) {
  istr = String(i);
  c = 0;
  for (j = 0; j < istr.length - 1; j++) {
    if (istr[j + 1] < istr[j]) {
      c++;
    }
  }
  res.push(istr.length - 1 == c);
}
console.log(res);




//  3) problem



// 3) WAP to print uniques and duplicates without using includes method
// input: 112
// output: 
// Uniques: 2
// Duplicates: 1


arr = [1,1,2];
// arr=112
uni = "";
dup = "";
const duplicates = arr.filter((item, index) => arr.indexOf(item) == index);
for (i of duplicates) {
  c = 0;
  for (j of arr) {
    if (i == j) {
      c++;
    }
  }
  if (c == 1) {
    uni += i + " ";
  } else {
    dup += i + " ";
  }
}
console.log("uniques are : "+uni);
console.log( "duplicates are "+dup);






// 4) WAP to print first missing fibonnacci umber
// input: 10 1 0 5 7
// output: 2


function findFirstMissingFibonacci(arr) {
  function generateFibonacci(limit) {
    let a = 0,
      b = 1;
    const fibNumbers = [a, b];

    while (true) {
      let nextFib = a + b;
      if (nextFib > limit) break;
      fibNumbers.push(nextFib);
      a = b;
      b = nextFib;
    }

    return fibNumbers;
  }

  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }
  console.log(maxNum);
  const fibNumbers = generateFibonacci(maxNum + 1);
  console.log(fibNumbers);

  for (let i = 0; i < fibNumbers.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === fibNumbers[i]) {
        found = true;
        break;
      }
    }
    if (!found) return fibNumbers[i];
  }

  return null;
}
const sequence = [10, 1, 0, 5, 7]; // Example array
const missingFib = findFirstMissingFibonacci(sequence);

console.log("First missing Fibonacci number is:", missingFib);