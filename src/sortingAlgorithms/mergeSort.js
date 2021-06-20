
export function msAnimations(arr) {
    if (arr.length <= 1) return arr;

    const extra_arr = arr.slice();
    const animations = [];
    ms(arr, 0, arr.length - 1, extra_arr, animations);
    return animations;
}

function ms(arr, l, r, extra_arr, animations) {
    if (l < r) {
        const mid = Math.floor((l + r) / 2);
        ms(extra_arr, l, mid, arr, animations);
        ms(extra_arr, mid + 1, r, arr, animations);
        merge(arr, l, mid, r, extra_arr, animations);
    }
}

function merge(arr, l, mid, r, extra_arr, animations) {
    let k = l;
    let i = l;
    let j = mid + 1;

    while (i <= mid && j <= r) {
        animations.push([i, j]);
        animations.push([i, j]);

        if (extra_arr[i] <= extra_arr[j]) {
            animations.push([k, extra_arr[i]]);
            arr[k] = extra_arr[i];
            i++;
            
        } else {
            animations.push([k, extra_arr[j]]);
            arr[k] = extra_arr[j];
            j++;
        }
        
        k++;
    }

    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);

        animations.push([k, extra_arr[i]]);
        arr[k] = extra_arr[i];
        i++;
        k++;
    }

    while (j <= r) {
        animations.push([j, j]);
        animations.push([j, j]);

        animations.push([k, extra_arr[j]]);
        arr[k] = extra_arr[j];
        j++;
        k++;
    }
}

