

const arr = [248, 156, 252, 55, 206, 91, 122, 99, 42, 57, 92, 240, 205, 43, 87, 239, 121, 26, 184, 290, 201, 174, 86, 23, 100, 212, 243, 220, 214, 298, 177, 230, 115, 291, 67, 120, 158, 130, 4, 191, 135, 172, 296, 194, 207, 5, 129, 237, 60, 97, 63, 14, 50, 6, 71, 209, 245, 104, 208, 213, 34, 244, 185, 85, 75, 164, 226, 98, 215, 13, 27, 238, 32, 183, 159, 200, 182, 189, 145, 265, 247, 126, 89, 81, 95, 3, 58];

function quickSort(arr) {
    function pivotHelper(arr, start = 0, end = arr.length-1) {
        let pivot = arr[start];
        let current = start;
        for (let i = start +1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                current++;
                let temp = arr[i];
                arr[i] = arr[current];
                arr[current] = temp;
              
            }
            if (i === end) {
                let temp = pivot;         
                arr[start] = arr[current];
                arr[current] = temp;
            }
        }
        return current;
    }
    let pivot = pivotHelper(arr);
    let counter = 0;
    let start = 0;
    for (let i = 0; i < pivot; i++) {
        pivotHelper(arr,start,pivot);
         if (arr[start] < arr[start-1]) {
            start--;
            i -= 2;
            counter++
        } else {
            start++
            if (arr[start] < arr[start-1]) {
                start--;
                i--
                counter++
            }
            counter++
        }
    }
    for (let i = pivot; i < arr.length; i++) {
        pivotHelper(arr,pivot,arr.length-1);
        if (arr[pivot] < arr[pivot-1]) {
            pivot--;
            i-= 2;
            counter++
        } else {
            pivot++
            if (arr[pivot] < arr[pivot-1]) {
                pivot--;
                i--
                counter++
            }
            counter++
        }
        
    }
    console.log(counter);
    return arr;
}

console.log(quickSort(arr));