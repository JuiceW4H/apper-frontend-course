class Stack{
    
    // Stack array constructor
    constructor() {
        this.stack = []
    }

    push(stackItems) {
        
        let typeArray = Array.isArray(stackItems)

        // Checks if object type is array then loops over each item within that array checking first if it is a string before appending it to the array.
        if(typeArray === true){
            stackItems.forEach((item) => {
                if(typeof(item) === "string"){
                    this.stack.push(item)
                    console.log(`${item} has been added to the stack.`)
                }
            })
            return
        }
        // Logic if appended item is not an array.
        console.log(`${stackItems} has been added to the stack.`)
        return this.stack.push(stackItems)
    }

    pop() {

        // Check stack size if it is empty it returns a console log.
        if(this.stack.length === 0){
            return console.log("Stack is currently empty")
        }

        return this.stack.pop()
    }

    check() {
        return console.log(this.stack)
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”
stack.pop()    // “Stack is currently empty.”