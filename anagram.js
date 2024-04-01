// ['hello'] = ['lleho']
// anagram -> arrangements may differ but not necessarily the letters.

function isAnagram(str1, str2) { 
  if (str1.length !== str2.length){
    return false;
  }
  let counter = {};
  for (let letters of str1){
    counter[letters] = (counter[letters] || 0) + 1;
    // counter[letters] ++;
    console.log(counter[letters]);
  }
  for (let items of str2){
    if(!counter[items] === 0){
        return false;
    } 
    counter[items] -= 1;
  }
  return true;
}
const checkAnagram = isAnagram('hello', 'lllho');
console.log(checkAnagram);