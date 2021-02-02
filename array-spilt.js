const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5); //slice rules

const removed = nums.splice(2, 5, 66, 77, 88);//splice rules

console.log(part);
console.log(nums);
console.log(removed);


const together = nums.join(",");//array join element
console.log(together);