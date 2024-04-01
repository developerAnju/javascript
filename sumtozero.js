// checking sum to zero 
// [-5,-4,-2,-1,0,2,4,8]
// can you please explain the below code in ds
function sumzero(array){
    for(let number of array){
        for(let i=1; i<array.length; i++){
            if(number + array[i] === 0){
                return number + array[i];
            }
        }
    }
}
const sum = sumzero([-5,-4,-2,-1,0,2,4,8]);
console.log(sum);
//O(n^2) quadratic time complexity