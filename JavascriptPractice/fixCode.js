function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr2.concat(arr[i]);
    }
    return arr2; 
  }
  console.log(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd']);