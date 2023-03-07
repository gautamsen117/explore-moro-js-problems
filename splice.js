const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

/* 
splice(start: number, deleteCount?: number | undefined): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
// will change the original array
*/
console.log(friends);
const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);