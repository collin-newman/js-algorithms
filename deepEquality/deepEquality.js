/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(apple, orange) {
  let checkType = (value) => {
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return 'array';
      } else {
        return 'object';
      }
    }
    return false;
  }

  let checkArray = (arr1, arr2) => {
    let equal = false;
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (checkType(arr1[i]) === checkType(arr2[i])) {
          if (checkType(arr1[i]) === 'array') {
            equal = checkArray(arr1[i], arr2[i]);
          } else if (checkType(arr1[i]) === 'object') {
            equal = checkObject(arr1[i], arr2[i]);
          } else {
            if (arr1[i] === arr2[i]) {
              equal = true;
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    return equal;
  };

  let checkObject = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let equal = false;
    if (keys1.length === keys2.length) {
      let vals1 = Object.values(obj1);
      let vals2 = Object.values(obj2);
      if (vals1.length === vals2.length) {
        for (let key in obj1) {
          if (checkType(obj1[key]) === checkType(obj2[key])) {
            if (checkType(obj1[key]) === 'array') {
              equal = checkArray(obj1[key], obj2[key]);
            } else if (checkType(obj1[key]) === 'object') {
              equal = checkObject(obj1[key], obj2[key]);
            } else {
              if (obj1[key] === obj2[key]) {
                console.log(obj1[key], obj2[key]);
                equal = true;
              } else {
                console.log(obj1[key], obj2[key])
                return false;
              }
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
    return equal;
  };

  return checkObject(apple, orange);
};