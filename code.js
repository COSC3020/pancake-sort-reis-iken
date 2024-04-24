function flip(array, n) {
    let flippedArray = array.slice(0, n).reverse();
    return flippedArray.concat(array.slice(n));
}

function pancakeSort(array) {
    let sortedArray = [...arr];
    let n = sortedArray.length;
    for (let i = n; i > 0; i--) {
        let max = 0;
        for (let j = 1; j < i; j++) {
            if (sortedArray[j] > sortedArray[max]) {
                max = j;
            }
        }
        sortedArray = flip(sortedArray, max + 1);
        sortedArray = flip(sortedArray, i);
    }
    return sortedArray;
}
