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
  $('#typing').on("keydown", function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $('').on('submit', function(){
    alert('')
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
