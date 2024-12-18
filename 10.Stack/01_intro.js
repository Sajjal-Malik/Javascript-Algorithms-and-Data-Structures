class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    // Add element to the top of the stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
    
    // Remove top element from the stack
    pop(){
        if(this.count == 0){
            return undefined
        }
        let deletedItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deletedItem} removed from stack`)
        return deletedItem
    }   

    // Print the top element of the stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if the stack is empty or not
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is Empty' : 'Stack is not empty')
        return this.count == 0
    }

    // Return the size of the stack
    size(){
        console.log(`${this.count} Elements in stack`)
        return this.count
    }

    // print element in stack
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' '
        }
        return str
    }

    // clear the stack
    clear(){
        this.items = []
        this.count = 0
        console.log("Stack cleared...")
        return this.items
    }
}

const stack = new Stack()
stack.isEmpty()
stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)
stack.peek()
stack.isEmpty()
console.log(stack.print())

stack.pop()
stack.pop()
stack.clear()
stack.size()
console.log(stack.print())