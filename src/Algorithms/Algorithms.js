let instanceArray = [];
let index = 0;

export const resetInstanceArray = () => {
    instanceArray = [];
    index = 0;
}

/************************************ BubbleSort *************************************/
export const bubbleSortAlg = (arr) => { 
    const n = arr.length; 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j+1]) { 
                let temp = arr[j]; 
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                instanceArray[index] = [...arr]
                index++;
            }
        }
    }
    return instanceArray;
}

/************************************ QuickSort *************************************/
function partition(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        instanceArray[index] = [...arr]
        index++;
        pivotIndex++;
        }
    }
    
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    instanceArray[index] = [...arr]
    index++;
    return pivotIndex;
};

export function quickSortAlg(arr, start, end) {
    if (start >= end) {
        return;
    }
    
    let index = partition(arr, start, end);
    
    quickSortAlg(arr, start, index - 1);
    quickSortAlg(arr, index + 1, end);

    return instanceArray;
} 

/************************************ HeapSort *************************************/

let array_length;
function heapRoot(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        let temp = input[i];
        input[i] = input[max];
        input[max] = temp;
        instanceArray[index] = [...input]
        index++;
        heapRoot(input, max);
    }
}

export function heapSortAlg(input) {
    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heapRoot(input, i);
      }

    for (let i = input.length - 1; i > 0; i--) {
        let temp = input[0];
        input[0] = input[i];
        input[i] = temp;
        array_length--;
        instanceArray[index] = [...input]
        index++;
      
        heapRoot(input, 0);
    }

    return instanceArray;
}

/************************************ MergeSort *************************************/

const merge = (Arr, start, mid, end) => {
    let temp = new Array(end - start + 1);

    let i = start, j = mid+1, k = 0;

    while(i <= mid && j <= end) {
        if(Arr[i] <= Arr[j]) {
            temp[k] = Arr[i];
            k += 1; i += 1;
        }
        else {
            temp[k] = Arr[j];
            k += 1; j += 1;
        }
    }

    while(i <= mid) {
        temp[k] = Arr[i];
        k += 1; i += 1;
    }

    while(j <= end) {
        temp[k] = Arr[j];
        k += 1; j += 1;
    }

    for(i = start; i <= end; i += 1) {
        Arr[i] = temp[i - start]
        instanceArray[index] = [...Arr]
        index++;
    }
}
    
      
export const mergeSortAlg = (Arr, start, end) => {
    if(start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSortAlg(Arr, start, mid);
        mergeSortAlg(Arr, mid+1, end);
        merge(Arr, start, mid, end);
    }
    return instanceArray;
}