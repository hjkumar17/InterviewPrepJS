// Write a function to deep copy and object
// @return new object which !== old object

// Shallow Copy and Deep Copy

// Shallow Copy: A shallow copy of an object is a copy whose properties reference the same objects as the original. If the original object contains other objects, the shallow copy will point to the same objects.

// Deep Copy: A deep copy of an object is a copy where all objects within the original are also copied recursively. Thus, changes to the deep copy will not affect the original object and vice versa.
let person = {
  name: "John",
  age: 30,
  address: { city: "New York" },
};

//   first method using JSON methods
function deepCopyUsingJSON(obj) {
  // console.log(obj)
  return JSON.parse(JSON.stringify(obj));
}

//   Second method using Recursion
function deepCopyUsingRecursion(obj) {
    //  check if its and obj or a property
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    // check is nested array or not
    if (Array.isArray(obj)) {
      let copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopyUsingRecursion(obj[i]);
      }
      return copy;
    }
  
    // making copy of nested obj
    let copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopyUsingRecursion(obj[key]);
      }
    }
    return copy;
  }

let newObj = deepCopyUsingJSON(person);
let newObj2 = deepCopyUsingRecursion(person);

newObj.name = "Janny";
newObj.address.city = "DC";
newObj2.address.city = "California"
console.log(person, newObj,newObj2);
