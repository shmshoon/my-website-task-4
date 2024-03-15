// Function to generate an array of unique random numbers
function generateRandomArray(size) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < size) {
        uniqueNumbers.add(Math.floor(Math.random() * 1000));
    }
    return Array.from(uniqueNumbers);
}

// Function to perform Selection Sort
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

function partition(arr, start, end) {
    let i = start + 1;
    let pivot = arr[start];

    for (let j = start + 1; j <= end; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            i += 1;
        }
    }

    [arr[start], arr[i - 1]] = [arr[i - 1], arr[start]]; // Put the pivot element in its proper place
    return i - 1; // Return the position of the pivot
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let piv_pos = partition(arr, start, end);
        quickSort(arr, start, piv_pos - 1); // Sorts the left side of pivot
        quickSort(arr, piv_pos + 1, end); // Sorts the right side of pivot
    }
    return arr;
}

// Function to measure the time it takes to sort an array using a given sorting algorithm
function measureSortTime(sortFunction, arrayToSort) {
    const copiedArray = [...arrayToSort]; // Create a copy to avoid modifying the original array

    // Record the start time
    const startTime = new Date().getTime();

    // Perform the sorting
    sortFunction(copiedArray);

    // Record the end time
    const endTime = new Date().getTime();

    // Calculate elapsed time in milliseconds
    const elapsedTime = endTime - startTime;

    return { sortedArray: copiedArray, elapsedTime };
}

// Example: Generate an array of unique random numbers
const randomArray = generateRandomArray(1000);

// Display a portion of the original array with unique random numbers
const previewOriginal = randomArray.slice(0, 5).concat('...', randomArray.slice(-5));
console.log(`Original Array (${randomArray.length} elements): [${previewOriginal.join(', ')}]`);

// Measure the time to sort the array using Selection Sort
const { sortedArray: selectionSortedArray, elapsedTime: selectionSortTime } = measureSortTime(selectionSort, randomArray.slice());

// Display a portion of the sorted array for Selection Sort
const previewSelectionSort = selectionSortedArray.slice(0, 5).concat('...', selectionSortedArray.slice(-5));
console.log(`Selection Sort Result (${selectionSortedArray.length} elements): [${previewSelectionSort.join(', ')}]`);
console.log(`Time taken for Selection Sort - Array size: ${selectionSortedArray.length}, Time taken: ${selectionSortTime} milliseconds`);

// Generate a new array for Quick Sort
const randomArrayForQuickSort = generateRandomArray(1000);

// Measure the time to sort the array using Quick Sort
const { sortedArray: quickSortedArray, elapsedTime: quickSortTime } = measureSortTime(quickSort, randomArrayForQuickSort.slice());

// Display a portion of the sorted array for Quick Sort
const previewQuickSort = quickSortedArray.slice(0, 5).concat('...', quickSortedArray.slice(-5));
console.log(`Quick Sort Result (${quickSortedArray.length} elements): [${previewQuickSort.join(', ')}]`);
console.log(`Time taken for Quick Sort - Array size: ${quickSortedArray.length}, Time taken: ${quickSortTime} milliseconds`);
