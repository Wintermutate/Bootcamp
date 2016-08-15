	var shredderSteve = {
		name: "Steve",
		age: 26,
		gender: "male",
		style: "park",
		highestJump: 10,

		shred: function(){
			alert(this.name+" drops in the halfpipe and shreds some serious gnar.");

		},
		hitJump: function(){
			var currentHigh = this.highestJump; 
			alert(this.name+ " gets ready to hit a jump. His current highest jump is "+currentHigh+" feet!");
			var newJump = Math.floor(Math.random()*100);
			alert(this.name+ " hit a sick jump! It is "+newJump+ " feet high!");
			if(newJump > currentHigh){
				this.highestJump = newJump; 
				alert("Wow! That was a new record for Steve at "+newJump+" feet!");
			}
			else{
				alert("This was not the highest jump Steve has ever hit. His highest is "+this.highestJump);
			}
		}
	}
	console.log(shredderSteve.name+" is the name of the snowboarder.");
	console.log("Let's get him started!");
	shredderSteve.shred();
	console.log("He's in the half pipe!");
	shredderSteve.hitJump();