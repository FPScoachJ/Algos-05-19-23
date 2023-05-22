let arr = [3, 5, -4, 11, 1, -1, 6];
let targetSum = 10;

function twoSum(array, sum){
    let result = [];
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[j] === sum - array[i]){
                result.push([array[i], array[j]])
            }
        }
    }
    console.log(result);
    return result;
} 

twoSum(arr, targetSum);

//refactor
function hashMapTwoSum(array, sum){
    let hashMap = {};
    let results = [];
}