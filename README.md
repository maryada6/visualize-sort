### Visualize sorting https://visualize-sort.netlify.app/

### Brute Force Algorithms

* **Insertion Sort**: Insertion Sort is arguably the most basic sorting algorithm and builds the final sorted list iteratively, comparing an element to the largest element in the sorted list behind it. If larger, it remains in position and if smaller, it swaps places before repeating this comparison again. Thus, at every iteration, the algorithm maintains a growing sorted list. Insertion Sort has a best-case time complexity of O(n) (if the array is already sorted) and a worst-case time complexity of O(n^2).

* **Selection Sort**: Selection Sort is another 'brute force' algorithm as it builds the final sorted list by going through all the elements in the array, comparing each element to the smallest element in the list from that position on. If found to be the smallest, it remains in position and if larger, it swaps places. As such, Selection Sort has a best-case and worst-case time complexity of O(n^2), typically performing worse than Insertion Sort.

* **Bubble Sort**: Bubble Sort is a sorting algorithm that iterates through the array, comparing each element to the next and swapping if it is larger than the adjacent element. Hence, at the end of every iteration, the algorithm puts the next-largest element in the list at its correct position and maintains a sorted list from right-to-left instead of vice versa, as was the case with Insertion & Selection Sorts. Bubble Sort has a best-case time complexity of O(n) and a worst-case time complexity of O(n^2).

### Divide & Conquer Algorithms

* **Merge Sort**: Merge Sort follows a different approach to the algorithms above; it works by breaking down the unsorted array into subdivisions containing a single element and then, repeatedly *merging* them to produce bigger, sorted subdivisions with the biggest being the sorted list. Merge Sort has a time complexity of O(n log n), which makes it a far more efficient algorithm to use than the brute force sorting algorithms above.

* **Quick Sort**: Quick Sort is another 'divide and conquer' algorithm; it works by selecting a 'pivot' element from the list (the last element, for example) before comparing each element to the pivot and correctly placing it in the partitioned list of elements, based on whether it is less than or greater than the pivot. These partitions are then sorted recursively, following the same approach. Quicksort has a best-case time complexity of O(n log n) - although it can be implemented to be faster than even Merge Sort - and a worst-case time complexity of O(n^2).
