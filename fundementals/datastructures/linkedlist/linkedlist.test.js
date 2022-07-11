const LinkedList = require('./linkedlist')

describe('LinkedList Tests', () => {
    describe('#insertAtHead', () => {
        test('it adds the element to the beginning of the list', () => {
            const ll = new LinkedList()
            ll.insertAtHead(10)
            const oldHead = ll.head
            ll.insertAtHead(20)
    
            expect(ll.head.value).toBe(20)
            expect(ll.head.next).toBe(oldHead)
            expect(ll.length).toBe(2)
        })
    })
    
    describe('#getByIndex', () => {
        describe('with index less than 0', () => {
            test('it returns null', ()=> {
                const ll = LinkedList.fromValues(10, 20)
    
                expect(ll.getByIndex(-1)).toBeNull()
            })
        })
    
        describe('with index greater than list length', () => {
            test('it returns null', ()=> {
                const ll = LinkedList.fromValues(10, 20)
    
                expect(ll.getByIndex(5)).toBeNull()
            })
        })
    
        describe('with index 0', () => {
            test('it should be the head', ()=> {
                const ll = LinkedList.fromValues(10, 20)
    
                expect(ll.getByIndex(0).value).toBe(10)
            })
        })
    
        describe('with index in the middle', () => {
            test('it should return at that index', ()=> {
                const ll = LinkedList.fromValues(10, 20, 30, 40)
    
                expect(ll.getByIndex(2).value).toBe(30)
            })
        })
    })
    
    describe('#insertAtIndex', () => {
        describe('with index less than 0', ()=> {
            test('should remain the same length', () => {
                const ll = LinkedList.fromValues(10, 20)
                ll.insertAtIndex(-1, 30)

                expect(ll.length).toBe(2)
            })
            

        })

        describe('with index greater than LinkedList', () => {
            test('should remain the same length', () => {
                const ll = LinkedList.fromValues(10, 20)
                ll.insertAtIndex(2, 30)

                expect(ll.length).toBe(3)
            })
            
        })

        describe('at head', () => {
            test('should insert new value', () => {
                const ll = LinkedList.fromValues(10, 20)
                ll.insertAtIndex(0, 30)
    
                expect(ll.head.value).toBe(30)
                expect(ll.head.next.value).toBe(10)
                expect(ll.length).toBe(3)
            })
        })

        describe('in the middle', () => {
            test('should insert at given index', () => {
                const ll = LinkedList.fromValues(10, 20, 30 , 40)
                ll.insertAtIndex(2, 50)
                const node = ll.getByIndex(2)
    
                expect(node.value).toBe(50)
                expect(ll.getByIndex(1).next.value).toBe(50)
                expect(ll.length).toBe(5)
            })
        })
    })

    describe("#print", () => {
            test('should print out linked list', () => {
                const ll = LinkedList.fromValues(10)

                expect(ll.print()).toContain('10 ->')
            })
        
    })

    describe('#removeHead', () => {
        test('should remove the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30 , 40)
            ll.removeHead()
            

            expect(ll.head.value).toBe(20)
            expect(ll.length).toBe(3)
        })
        
    })

    describe('#removeAtIndex', () => {
        describe('with index less than 0', ()=> {
            test('should remain the same length', () => {
                const ll = LinkedList.fromValues(10, 20)
                ll.removeAtIndex(-1)

                expect(ll.length).toBe(2)
            })
            

        })

        describe('with index greater than LinkedList', () => {
            test('should remain the same length', () => {
                const ll = LinkedList.fromValues(10, 20)
                ll.removeAtIndex(2)

                expect(ll.length).toBe(2)
            })
            
        })

        describe('at head', () => {
            test('should remove head', () => {
                const ll = LinkedList.fromValues(10, 20, 30)
                ll.removeAtIndex(0)
    
                expect(ll.head.value).toBe(20)
                expect(ll.length).toBe(2)
            })
        })

        describe('in the middle', () => {
            test('should remove at given index', () => {
                const ll = LinkedList.fromValues(10, 20, 30 , 40)
                ll.removeAtIndex(2)
                const node = ll.getByIndex(1)
    
                expect(node.value).toBe(20)
                expect(ll.getByIndex(1).next.value).toBe(40)
                expect(ll.length).toBe(3)
            })
        })
    })
}) 
