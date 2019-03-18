//1  checks arrays to see if any combination (excluding largest) of numbers can equal the largest number of the array.
var a = [5,7,16,1,2]; //false
var b = [3,5,-1,8,12]; //true

function ArrayAdditionI(arr) { 
    var biggest = Math.max(...arr);
    for(let i=0;i<=arr.length - 1;i++){
       var result = 0;
       for(let j=0;j<=arr.length - 1;j++){
           if(arr[j] == arr[i]) continue;
           else result += arr[j];
           if(result == biggest) return "true";
       }
    }
    return "false";
}

// note: The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// note: continue statement allows the second loop to start 1 ahead and avoid adding duplicates

// note: the array is spread, and that spread array is passed in as the argument for Math.max()