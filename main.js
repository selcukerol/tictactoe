

////////////========================SET PLAYERS ====================================////////////////////////////////////////

function Player(name,symbol){
	this.name = name;
	this.symbol = symbol;
}
var players = [
new Player("Player 1","playX.png"),
new Player("Player 2","playO.png")
];
var currentPlayer = 0;

/////////////////////////==================================SQAURE   IDSSSS=======================================================//////////

function Square(id,symbol,isOccupied){
	this.id =id;
	this.symbol =symbol;
	this.isOccupied = false;
}
var squares = [
new Square("square1","E",false),
new Square("square2","E",false),
new Square("square3","E",false),
new Square("square4","E",false),
new Square("square5","E",false),
new Square("square6","E",false),
new Square("square7","E",false),
new Square("square8","E",false),
new Square("square9","E",false)
];
////////////////////////////================================EVENT LISTENER===================================/////////////////////
document.querySelectorAll(".box").forEach(function(element){
	element.addEventListener("click",function(event){
    var square = squares.find(function(potato){
    	return potato.id == event.target.id;
    });
    if(square.symbol==="E"){
    	square.symbol = currentPlayer % 2 ? "O" : "X"; //////// you get a number 0 is false X is true//////
    	square.isOccupied = true;
    	event.target.style.backgroundImage = `url('${players[currentPlayer].symbol}')`; /////// to get variable results////////
    	currentPlayer = (currentPlayer + 1 ) % 2; /////// change current player  ////////////////
    }
    setTimeout(winner,100);
});
});


///////////////////========================WHO IS THE WINNER??????============================////////////////////////////////////////


var lines = [
[squares[0],squares[1],squares[2]],
[squares[3],squares[4],squares[5]],
[squares[6],squares[7],squares[8]],
[squares[0],squares[3],squares[6]],
[squares[1],squares[4],squares[7]],
[squares[2],squares[5],squares[8]],
[squares[0],squares[4],squares[8]],
[squares[2],squares[4],squares[6]],
];



function winner(){	
	var champion = lines.find(function (arr){
		var symbols = arr.map(function(square){
			return square.symbol;
		});
		return symbols.filter(function(symbol){
							// check for all Xs
							return symbol === "X";
						}).length === 3 || symbols.filter(function(symbol){
							//check for all Os
							return symbol === "O";
						}).length === 3 
					});	
	if( champion ) {
		alert(" Winner is " + " player " + champion[0].symbol);
	}
	return champion && champion[0].symbol;	
}












