
export function isAnimations(arr) {
    if (arr.length <= 1) return arr;
    
    const extra_arr = arr.slice();
    const animations = [];
    insertionSort(extra_arr, animations);
    return [animations, extra_arr];
}

function insertionSort(arr, animations) {
    for (let i = 1; i < arr.length; i++) {
        let elem = arr[i];
        animations.push(["a", i - 1, i]);
        animations.push(["b", i - 1, i]);

        let j = i - 1;

        while (j >= 0 && arr[j] > elem) {
            animations.push(["replace", j + 1, arr[j]]);
            arr[j + 1] = arr[j];

            if (j >= 0) {
                animations.push(["a", j, i]);
                animations.push(["b", j, i]);
            }

            j--;
        }

        animations.push(["replace", j + 1, elem]);
        arr[j + 1] = elem;
    }
}
