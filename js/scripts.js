// $(document).ready(function(){
//   $("form").submit(function(event){
//   var number = parseInt($("#userNumber").val());

  var factorial = function(userNum) {
    var factorialArray = [];
    for (var index = 1; index <= userNum; index+= 1) {
      factorialArray.push(index);
    };
    console.log(factorialArray);
    var total = 1
    for (var index = 0; index < factorialArray.length; index += 1) {
      total *= factorialArray[index];
    }
    return total;
  };

  $(document).ready(function(){
    $("form").submit(function(event){
      var number = parseInt($("#userNumber").val());
      // console.log(number);
      var result = factorial(number);
      $("#number").text(number);
      $("#total").text(result);
      $(".result").show();
  // console.log(total);
      event.preventDefault();
});
});
