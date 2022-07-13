//O(N^2) 
function printPairs (arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + " , " + arr[j])
            
          }

    }
  
  }

array = [0,1,2,3,4]

printPairs(array)