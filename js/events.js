//define functions here
function getIt(){
  $('p').on("click", function(){
    alert("hey");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('#typing').on("keydown", function(){
    if()
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
});
