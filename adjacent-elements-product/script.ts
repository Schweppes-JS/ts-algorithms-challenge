function adjacentElementsProduct(array: number[]): number {
  let largestProduct = array[0] * array[1];
  for (let i = 1; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1];
    console.log(product)
    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));