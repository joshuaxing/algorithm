
// 冒泡算法
function bubleSort(arr) {
  let len = arr.length;
  for(outer = len; outer >= 2; outer--) {
    for(inner = 0; inner < outer-1; inner++) {
      if (arr[inner] > arr[inner+1]) {
        [arr[inner], arr[inner+1]] = [arr[inner+1], arr[inner]]
      }
    }
  }
}
console.log(bubleSort([4,3,6,1,9,6,2]))

// 插入
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      } else {
        break;
      }
    }
  }
  return arr;
}

// 快排
