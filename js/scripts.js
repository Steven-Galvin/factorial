$(document).ready(function(){
  $("form").submit(function(event){
  var number = parseInt($("#userNumber").val());

  var factorial = [];

  for (var index = 1; index <= number; index+= 1) {
  factorial.push(index);
  };

  var total = 1
  for (var index = 0; index < factorial.length; index += 1) {
  total *= factorial[index];
  }


  $("#number").text(number);
  $("#total").text(total);
  $(".result").show();
  // console.log(total);
  event.preventDefault();
});
});
