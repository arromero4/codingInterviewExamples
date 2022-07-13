//O(ab) 
function printPairs (arrA, arrB){

    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if(arrA[i] < arrB[j]){
                console.log(arrA[i]+" , " + arrB[j])
            }
            
          }

    }
  
  }

arrayA = [0,1,2,3,4]
arrayB = [0,1,2,3,4]
printPairs(arrayA, arrayB)