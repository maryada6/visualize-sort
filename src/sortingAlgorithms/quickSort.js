
export function qsAnimations(arr) {
    const extra_arr = arr.slice();
    const animations = [];
    qs(extra_arr, 0, extra_arr.length - 1, animations);
    return [animations, extra_arr];
}

function qs(arr, l, r, animations) {
    if (l < r) {
        let index = partition(arr, l, r, animations);
        qs(arr, l, index - 1, animations);
        qs(arr, index + 1, r, animations);
    }
}

function partition(arr, l, r, animations) {
    let pivot = arr[r];
    let k = l;
    let i = l;
    
    while (i <= r - 1) {
        animations.push([i, r]);
        animations.push([i, r]);

        if (arr[i] <= pivot) {
            animations.push([i, arr[k]]);
            animations.push([k, arr[i]]);
            
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
            k++;

        } else {
            animations.push([0, 0]);
            animations.push([0, 0]);
        }

        i++;
    }

    animations.push([0, 0]);
    animations.push([0, 0]);

    animations.push([k, arr[r]]);
    animations.push([r, arr[k]]);

    let temp = arr[k];
    arr[k] = arr[r];
    arr[r] = temp;

    return k;
}

