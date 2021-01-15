/*
 * function bind():
 *
 * example 1:
 *
var alice = {
  name: 'alice',
  shout: function(){
    alert(this.name);
  }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'
 *
 * example 2:
 *
var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true
 *
*/

var bind = function(fn, obj, ...args) {
  // TODO: Your code here
  return (...otherArgs) => fn.apply(obj, args.concat(otherArgs))
};


/*
 * Function.prototype.bind:
 *
 * example 1:
 *
var alice = {
  name: 'alice',
  shout: function(){
    alert(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'

 example 2:

var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true
 */

Function.prototype.bind = function(obj, ...args) {
  // TODO: Your code here
  return (...otherArgs) => this.apply(obj, args.concat(otherArgs))
};