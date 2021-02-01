var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

class makeHashTable {
  constructor() {
    this.storage = [];
    this.limit = 4;
  }

  insert(key, value) {
    const index = getIndexBelowMaxForKey(key, this.limit);
    if (!Array.isArray(this.storage[index])) {
      this.storage[index] = [[key, value]];
    } else {
      this.storage[index].push([key, value]);
    }
    console.log(this.storage);
  }

  retrieve(key) {
    const index = getIndexBelowMaxForKey(key, this.limit);
    if (this.storage[index].length === 1 && this.storage[index][0] === key) {
      return this.storage[index][0][1];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
    return null;
  }

  remove(key) {
    const index = getIndexBelowMaxForKey(key, this.limit);
    if (this.storage[index].length === 1) {
      this.storage[index] = null;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
        }
      }
    }
    return null;
  }
}