// User selects rock, paper, or scissors
// Computer randomly chooses (hint: have your choices in an array and randomly choose) 
// DISPLAY the user and computers choice on the screen
// DISPLAY the winner



$(document).ready(function() { 
  
  var choices = ['Rock', 'Paper', 'Scissors']
  var playerChoice 
  var computerChoice

  function computerChoice() {
    choices.each[Math.floor(Math.random() * choices.length)]
  }


  $('#rock').on('click', function(){
    playerChoice = 'rock';
    computerChoice();
    result();
   });

  $('#paper').on('click', function(){
    playerChoice = 'paper';
    computerChoice();
    result();
   });

  $('#scissors').on('click', function(){
    playerChoice = 'scissors';
    computerChoice();
    result();
  })


  

})
