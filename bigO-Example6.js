function reverse(arr) {
  for (let i = 0; i < arr.length/2; i++) {
    //[0,1,2,3,4]
    //[4,1,2,3,0]
    //[4,3,2,1,0]

    // arr.length/2 = 2.5
    
    let other = arr.length -i- 1 
    //4
    //3
    //2

    let temp = arr[i]
    //0
    //1
    //2

    arr[i] = arr[other] 
    //[4,1,2,3,0]
    //0 1 2 3 4

    //[4,3,2,3,0]
    //0 1 2 3 4

    //[4,3,2,1,0]
    //0 1 2 3 4

    arr[other] = temp
    //[4,1,2,3,0]
    //0 1 2 3 4

    //[4,3,2,1,0]
    //0 1 2 3 4
    
    //[4,3,2,1,0]
    //0 1 2 3 4    
  }
  
}

let array = [0,1,2,3,4]

reverse(array)