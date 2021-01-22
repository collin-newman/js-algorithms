/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}


function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  const reverseLinkedList = (list) => {
    const listItems = [];
    while (list.next !== null) {
      listItems.push(list.value);
      list = list.next;
    }
    if (list) {
      listItems.push(list.value);
    }
    return listItems.reverse();
  }
  const array1 = reverseLinkedList(list1);
  const array2 = reverseLinkedList(list2);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return array1.slice(0, i).reverse().join('');
    }
  }
  return null;
}