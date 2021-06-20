
export function bsAnimations(arr) {
    const extra_arr = arr.slice();
    const animations = [];
    bubbleSort(extra_arr, animations);
    return [animations, extra_arr];
}

function bubbleSort(arr, animations) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);

            if (arr[j + 1] < arr[j]) {
                animations.push([j, arr[j + 1]]);
                animations.push([j + 1, arr[j]]);

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            } else {
                //Filler
                animations.push([0, 0]);
                animations.push([0, 0]);
            }
        }
    }
}

