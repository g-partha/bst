  function merge(arr1, arr2) {
    const mergedArray = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        // Note: <= handles equal case
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    // Add remaining elements
    mergedArray.push(...arr1.slice(i));
    mergedArray.push(...arr2.slice(j));
    return mergedArray;
  }

export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const median = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, median)),
    mergeSort(array.slice(median))
  );
}