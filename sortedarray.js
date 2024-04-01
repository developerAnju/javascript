//sorted array [1,1,2,2,3,3,4,4,5,6,7,8]
//i,j i=0,j=1
//compare i and j if i==j then
function sortedArray(array){
    if(array.length){
        let i = 0;
        for(j=1;j<array.length;j++) {
            if(array[i]!==array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i+1;
    } else {
        throw new Error("sorted array must not be empty");
    }
}
const sorted = sortedArray([1,1,2,2,3,3,4,4,5,6,7,8,8,9,9,10]);
console.log(sorted);