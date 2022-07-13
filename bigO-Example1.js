//O(N)
function foo (arr){
  let sum = 0
  let product = 1
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
  }

  for (let i = 0; i < array.length; i++) {
    product *= arr[i]
    
  }

  console.log(sum + ", " + product)

}

array = [1,2,3,4,5,6,7,8]
foo(array)