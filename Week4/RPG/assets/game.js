$(document).ready(function(){
	var playerCharacter;
	var currentEnemy;
	var playerChosen = false;
	var enemyChosen = false; 

 var gameCharacters = [
 	lukeSkywalker = {
 		name: "Luke Skywalker",
 		image: "<img src = 'assets/luke.jpg' class = 'img-responsive' id = 'Luke' alt = 'Luke Skywalker'>",
 		health: 100, 
 		attack: 20, 
 		counter: 5, 
 	},
 	darthVader = {
 		name: "Darth Vader",
 		image: "<img src = 'assets/vader.jpg' class = 'img-responsive' id = 'Vader' alt = 'Darth Vader'>",
 		health: 150, 
 		attack: 10, 
 		counter: 15, 
 	},
 	hanSolo = {
 		name: "Han Solo",
 		image: "<img src = 'assets/han.jpg' class = 'img-responsive' id = 'Han' alt = 'Han Solo'>",
 		health: 120, 
 		attack: 10,
 		counter: 20,
 	},
 	maceWindu = {
 		name: "Mace Windu",
 		image: "<img src = 'assets/mace.jpg' class = 'img-responsive' id = 'Mace' alt = 'Mace Windu'>",
 		health: 200,
 		attack: 5,
 		counter: 15,
 	},
 ];
 
function startGame () {
	$('#characters').append(lukeSkywalker.image, darthVader.image, hanSolo.image, maceWindu.image);
	$('#characters').children('img').on("click", function(){
		playerCharacter = this;
		console.log(playerCharacter);
	});
}
startGame();
});
