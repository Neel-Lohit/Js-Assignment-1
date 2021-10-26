

var add = function(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  };
  

function average (Add){
    return  Add(2, 3, 4, 5)/5; 
}

console.log(average(add));
