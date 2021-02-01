var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var makeHashTable = function() {
  var result = {};
  var storage = [];
  var limit = 4;

  result.insert = function(key, value) {
    const index = getIndexBelowMaxForKey(key, limit);
    if (!Array.isArray(storage[index])) {
      storage[index] = [[key, value]];
    } else {
      storage[index].push([key, value]);
    }
    console.log(storage);
  };

  result.retrieve = function(key) {
    const index = getIndexBelowMaxForKey(key, limit);
    if (storage[index].length === 1 && storage[index][0] === key) {
      return storage[index][0][1];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
    return undefined;

  };

  result.remove = function(key) {
    const index = getIndexBelowMaxForKey(key, limit);
    if (storage[index].length === 1) {
     storage[index] = null;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
         storage[index].splice(i, 1);
        }
      }
    }
    return null;
  }

  return result;
};