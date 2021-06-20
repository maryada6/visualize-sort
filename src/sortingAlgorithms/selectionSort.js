
export function ssAnimations(arr) {
    if (arr.length <= 1) return arr;
    
    const extra_arr = arr.slice();
    const animations = [];
    selectionSort(extra_arr, animations);
    return [animations, extra_arr];
}

function selectionSort(arr, animations) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let index = i;

        for (let j = i + 1; j < arr.length; j++) {
            animations.push(["a", j, index]);
            animations.push(["b", j, index]);

            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }

        animations.push(["replace", index, arr[i]]);
        animations.push(["replace", i, min]);
        
        let temp = min;
        arr[index] = arr[i];
        arr[i] = temp;
    }
}

