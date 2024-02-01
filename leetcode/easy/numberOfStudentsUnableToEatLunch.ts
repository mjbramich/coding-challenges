function countStudents(students: number[], sandwiches: number[]): number {
    // Inputs => students is an array of numbers,in a queue
    // sandwiches is an stack data structure, which is an array of numbers

    // Number of sandwiches === no. of students

    // if Student at front of queue likes sandwhich on stack, they leave queue (students)

    // else go to back of queue

    // continues until no students want to take top of stack, exit condition out of loop ?

    // return No. of students left in queue
    let studentsEaten: number = 0
    let queue: number[] = students.slice()
    while(sandwiches.length > 0){
        // Compate whether top of stack is equal to front of queue
        if(sandwiches[0] === queue[0]){
            // remove sandwich from stack
            sandwiches.shift()
            // remove student from queue
            queue.shift()
            // go to next interation
            studentsEaten++
            continue;
        }else{
            let willTakeSandwich = sandwichAvailable(sandwiches[0], queue) 
            if(!willTakeSandwich){
                break;
            }
            // Put student to back of queue
           
            queue.push(queue.shift())

            
        }
    }
    return students.length - studentsEaten
};


function sandwichAvailable(sandwich: number, queue: number[]): boolean {
    return queue.includes(sandwich);
}