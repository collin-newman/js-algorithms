/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  const tree = Object.create(treeMethods);

  tree.storage = [];

  return tree;
};

//methods go here!
treeMethods = {};

treeMethods.addChild = function(value) {
  this.storage.push(value);
};

treeMethods.contains = function(value) {
  return this.storage.includes(value);
};

