// Custom write array flat method

let array = [0, 1, 2, [3, 4],[5,[6,7]]];

// console.log(array.flat(1));

function flatArray(arr, N) {
  if (N === 0) return arr;

  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      newArr.push(...flatArray(arr[x], N - 1));
    } else {
      newArr.push(arr[x]);
    }
  }
  return newArr;
}

// flatArray(array, 1);
console.time()
console.log(flatArray(array, 1));
console.timeEnd()


//  another way which is fast and efficient feel free to play with it.
// function customFlat(array, depth = 1) {
//     if (depth < 1) return array.slice(); // If depth is less than 1, return a shallow copy of the array
  
//     let result = [];
//     let stack = array.map(item => ({ item, depth }));
  
//     while (stack.length > 0) {
//       let { item, depth } = stack.pop();
  
//       if (Array.isArray(item) && depth > 0) {
//         // Decrement depth and add array elements to the stack
//         stack.push(...item.map(innerItem => ({ item: innerItem, depth: depth - 1 })));
//       } else {
//         result.push(item);
//       }
//     }
  
//     // Reverse the result to maintain the original order
//     return result.reverse();
//   }
  
//   // Usage
//   let nestedArray = [1, [2, [3, [4]], 5], 6];
//   let flattenedArray = customFlat(nestedArray, Infinity);
//   console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
  