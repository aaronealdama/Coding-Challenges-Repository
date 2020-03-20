

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };
    function merge(arr1,arr2) {
        let emptyArr = [];
        let counter1 = 0;
        let counter2 = 0;
        while (counter1 < arr1.length && counter2 < arr2.length) {
            if (arr1[counter1] < arr2[counter2]) {
                emptyArr.push(arr1[counter1]);
                counter1++;
            } else {
                emptyArr.push(arr2[counter2]);
                counter2++
            }
        }
        while (counter2 < arr2.length) {
            emptyArr.push(arr2[counter2]);
            counter2++;
        }
        while (counter1 < arr1.length) {
            emptyArr.push(arr1[counter1]);
            counter1++;
        }
        return emptyArr;
    }
    const arr1 = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
    const arr2 = mergeSort(arr.slice(Math.floor(arr.length/2)));
    return merge(arr1,arr2)
}

console.log(mergeSort([2,123,41,8,10,67,29]));



