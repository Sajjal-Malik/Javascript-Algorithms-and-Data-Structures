class Stack{
    constructor(){
        this.items = {};
        this.count = 0;
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    pop(){
        const item = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return item;
    }

    peek(){
        return this.items[this.count - 1];
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count == 0;
    }

    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();