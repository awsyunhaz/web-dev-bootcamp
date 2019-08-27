function echo(str, num){
    console.log(str)
} 

echo("echo", 1)

function average(arr){
    sum = 0;
    arr.forEach(function(score){
       sum += score; 
    })
    console.log(sum/arr.length);
}

average([1,2,3])