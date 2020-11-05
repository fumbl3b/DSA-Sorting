const arr1 = [ 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 ];

/*
What is the resulting list that will be sorted after 3 recursive calls to mergesort?
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
What are the first 2 lists to be merged?
Which two lists would be merged on the 7th merge?
*/

function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }

  const mid = Math.floor( a.length / 2 );
  let l = a.slice(0,mid);
  let r = a.slice(mid, a.length);

  l = mergeSort(l);
  r = mergeSort(r);

  return merge(l,r,a);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for( let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}


merge([2,9,3,4],[1,5,3,6,8],[2,9,3,4,1,5,3,6,8]);

//mergeSort([2,6,9,3,4,5]);