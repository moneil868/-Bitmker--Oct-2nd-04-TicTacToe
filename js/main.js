document.addEventListener('DOMContentLoaded', function () {

  // Declared variables

  var gameBoard = document.querySelector('.game-board')
  var one = document.querySelector('#one');
  var two = document.querySelector('#two');
  var three = document.querySelector('#three');
  var four = document.querySelector('#four');
  var five = document.querySelector('#five');
  var six = document.querySelector('#six');
  var seven = document.querySelector('#seven');
  var eight = document.querySelector('#eight');
  var nine = document.querySelector('#nine');
  var clicked = 1

  // Click logic for `X` and `O`

gameBoard.addEventListener('click', function(event){
  console.log(event)
  if(event.path[0].innerText == ""){

      if(clicked % 2 == 0){
        event.path[0].innerText = 'O';

        if(one.innerText === 'O' &&
          two.innerText === 'O' &&
          three.innerText === 'O'){
        alert('O Wins!');
        location.reload();
        }
        else if(four.innerText === 'O' &&
          five.innerText === 'O' &&
          six.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(seven.innerText === 'O' &&
          eight.innerText === 'O' &&
          nine.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(one.innerText === 'O' &&
          four.innerText === 'O' &&
          seven.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(two.innerText === 'O' &&
          five.innerText === 'O' &&
          eight.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(three.innerText === 'O' &&
          six.innerText === 'O' &&
          nine.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(one.innerText === 'O' &&
          five.innerText === 'O' &&
          nine.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
        else if(three.innerText === 'O' &&
          five.innerText === 'O' &&
          seven.innerText === 'O') {
          alert('O Wins!');
          location.reload();
        }
      }
      else if ( clicked == 9 ) {
        alert('Stalemate. Play again!');
        location.reload();
      }
      else{
        event.path[0].innerText = 'X';

        if(one.innerText === 'X' &&
          two.innerText === 'X' &&
          three.innerText === 'X'){
        alert('X Wins!');
        location.reload();
        }
        else if(four.innerText === 'X' &&
          five.innerText === 'X' &&
          six.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(seven.innerText === 'X' &&
          eight.innerText === 'X' &&
          nine.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(one.innerText === 'X' &&
          four.innerText === 'X' &&
          seven.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(two.innerText === 'X' &&
          five.innerText === 'X' &&
          eight.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(three.innerText === 'X' &&
          six.innerText === 'X' &&
          nine.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(one.innerText === 'X' &&
          five.innerText === 'X' &&
          nine.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
        else if(three.innerText === 'X' &&
          five.innerText === 'X' &&
          seven.innerText === 'X') {
          alert('X Wins!');
          location.reload();
        }
      }

      clicked += 1;
    }
  });






  // one.addEventListener('click', function(){
  //   if(one.innerText == ""){
  //     if(clicked % 2 == 0){
  //       one.innerText = 'O';
  //     }
  //     else {
  //       one.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // two.addEventListener('click', function(){
  //   if(two.innerText == ""){
  //     if(clicked % 2 == 0){
  //       two.innerText = 'O';
  //     }
  //     else {
  //       two.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // three.addEventListener('click', function(){
  //   if(three.innerText == ""){
  //     if(clicked % 2 == 0){
  //       three.innerText = 'O';
  //     }
  //     else {
  //       three.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // four.addEventListener('click', function(){
  //   if(four.innerText == ""){
  //     if(clicked % 2 == 0){
  //       four.innerText = 'O';
  //     }
  //     else {
  //       four.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // five.addEventListener('click', function(){
  //   if(five.innerText == ""){
  //     if(clicked % 2 == 0){
  //       five.innerText = 'O';
  //     }
  //     else {
  //       five.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // six.addEventListener('click', function(){
  //   if(six.innerText == ""){
  //     if(clicked % 2 == 0){
  //       six.innerText = 'O';
  //     }
  //     else {
  //       six.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // seven.addEventListener('click', function(){
  //   if(seven.innerText == ""){
  //     if(clicked % 2 == 0){
  //       seven.innerText = 'O';
  //     }
  //     else {
  //       seven.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // eight.addEventListener('click', function(){
  //   if(eight.innerText == ""){
  //     if(clicked % 2 == 0){
  //       eight.innerText = 'O';
  //     }
  //     else {
  //       eight.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });
  //
  // nine.addEventListener('click', function(){
  //   if(nine.innerText == ""){
  //     if(clicked % 2 == 0){
  //       nine.innerText = 'O';
  //     }
  //     else {
  //       nine.innerText = 'X';
  //     }
  //     clicked += 1;
  //   }
  // });




});
