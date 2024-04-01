function sumToZero(array){
    let left = 0;
    let right = array.length-1;
    while (left < right) { 
        // if (array[left] + array[right] === 0) return [array[left], array[right]]; 
        // else if (array[left] + array[right] > 0) right--;  
        // else left++ ;   
        let sum = array[left] + array[right];
        if (sum === 0){
            return [array[left],array[right]];
        }else if (sum > 0){
            right--;
        }else{
            left++;
        }
        }
    
    }                     
const sum = sumToZero([-5,-4,-3,0,2,4,8]);
console.log(sum); //

//O(n) linear time complexity
