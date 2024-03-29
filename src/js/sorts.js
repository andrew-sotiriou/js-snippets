import { addExampleValueToElement as addValue } from './writeValues.js'

const defaultComparator = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const quickSort = (unsortedArray, comparator = defaultComparator) => {
    // Create a sortable array to return.
    const sortedArray = [ ...unsortedArray ];

    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {

        // If this sub-array is empty, it's sorted.
        if (end - start < 1) {
            return;
        }

        const pivotValue = sortedArray[end];
        let splitIndex = start;
        for (let i = start; i < end; i++) {
            const sort = comparator(sortedArray[i], pivotValue);

            // This value is less than the pivot value.
            if (sort === -1) {
                if (splitIndex !== i) {
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }

                // Move the split index to the right by one
                splitIndex++;
            }

        // Leave values that are greater than or equal to the pivot value where they are.
        }

        // Move the pivot value to between the split.
        sortedArray[end] = sortedArray[splitIndex];
        sortedArray[splitIndex] = pivotValue;

        // Recursively sort the less-than and greater-than arrays.
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
};
const arrayToSort = [5,52,5,28,1,4,3,5,9,10,467389,998348];
addValue(quickSort(arrayToSort), "quick-sort-container");