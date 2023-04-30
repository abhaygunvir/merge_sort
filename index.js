const {mergeSort}=require('./algorithms/index');
const {Queue}=require('./data_structures/index');

const new_queue=new Queue();
new_queue.enqueue(1);
new_queue.enqueue(2);
new_queue.enqueue(3);
new_queue.printQueue(); // Output: "1 2 3"
