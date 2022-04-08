class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    instertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

const ll = new LinkedList()
ll.instertAtHead(10);
ll.instertAtHead(20)

console.log(ll)