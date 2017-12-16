// statement preparing the DOM for jquery
$(document).ready(function() {
//global variables
	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	//win and loss counter
	$('#win').text(wins);
	$('#loss').text(losses);

	newCrystals();
	newGame();
	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
				// code that determines random number
				// math.ceil decimal adjustment
			  var randomNumber = Math.ceil(Math.random()*15)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomNumber){
					found = true; break
				}
			  }
// ! indicates false statement
				if(!found)numbers[numbers.length]=randomNumber;
			}
		//console.log(newCrystals);
		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}
	// reset game function
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min)+1);
			}

		var numberToGuess = randomIntFromInterval(11,200);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));

		    $('#yourScore').text(counter);
//adding to win counter
		    if (counter == numberToGuess){
		      $('#status').text('Winner!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
	//adding to loose counter
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});
