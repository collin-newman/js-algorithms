/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
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
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;
  result.buckets = 0;
  result.loadFactor = result.size / result.buckets;

  result.insert = function(k, v) {
    let index = getIndexBelowMaxForKey(k);

    if (Array.isArray(storage[index]) === false) {
      storage[index] = [];
      result.buckets++;
      result.loadFactor = result.size / result.buckets;
    }

    if (result.loadFactor < 0.75) {
      result.storage[index].push([k, v]);
      result.size++;
      result.loadFactor = result.size / result.buckets;
    } else {
      result.resize(2);
      result.insert(k, v);
    }
  };

  result.retrieve = function(k) {
    let index = getIndexBelowMaxForKey(k);

    for (let i = 0; i < result.storage[index].length; i++) {
      if (result.storage[index][i][0] === k) {
        return result.storage[index][i][1];
      }
    }
  };

  result.remove = function(k) {
    index = getIndexBelowMaxForKey(k);

    for (let i = 0; i < result.storage[index].length; i++) {
      if (result.storage[index][i][0] === k) {
        let removedEntry = result.storage[index].splice(i, 1);
        result.size--;
        if (result.storage[index].length === 0) {
          result.storage[index] = undefined;
          result.buckets--;
        }
        result.loadFactor = result.size / result.buckets;
        if (loadFactor < 0.25) {
          result.resize(0.5);
        }
        return removedEntry;
      }
    }
  };

  result.resize = function(factor) {
    let oldEntries = [];
    for (let bucket = 0; bucket < result.storage.length; bucket++) {
      for (let entry = 0; entry < result.storage[bucket].length; entry++) {
        oldEntries.push(result.storage[bucket][entry]);
      }
    }

    result.storageLimit *= factor;
    result.storage = [];

    for (let i = 0; i < oldEntries.length; i++) {
      result.insert(oldEntries[i]);
    }
  }

  return result;
};
