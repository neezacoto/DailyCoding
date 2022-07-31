const LinkedList = require('./linkedlist')

const ll = LinkedList.fromValues(10, 20,30,40)

console.log(ll.print())
console.log(ll.insertAtIndex(2,60))
console.log(ll.print())