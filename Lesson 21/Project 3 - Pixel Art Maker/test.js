
// ----- Event Listener------------
// Makes the pixel canvas (grid) after clicking on the "Submit Querry" button.
$('#button').click(function(event){    // Used the convenience method .click
	event.preventDefault();            // Needed to keep the canvas on the screen!! https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit
	clearGrid();       				   // Calls the clearGrid function
	makeGrid();						   // Callas the makeGrid function
});



// ----- Event Listener-----------
// Colors each pixel after it is clicked on.
$('#pixelCanvas').on('click', 'td', function(event){         // Used the event delegation to add a single event listener to #pixelCanvas.
	$(this).css('backgroundColor', selectColor());           // Changes the css background-color attribute to the pixel (<td> element) that
});													         // was clicked on. This line calls on the selectColor function as well.



// ----- Event Listener-----------
// Dynamically modifies <div #container> when #colorPicker is being used.
// Liked the library chroma.js in order to work with colors: http://gka.github.io/chroma.js/
$('#colorPicker').on('input',function(event){
	$('#container').css('backgroundColor', selectColor());	 // The #container changes background color along with the color picker input.
	if (chroma.contrast(selectColor(),'black')<4.5){         // The method .contrast allows for background and text color comparison.
		$('#container').css('color','white');				 // Sets font to white if contrast score is low
	}
	else if (chroma.contrast(selectColor(),'white')<4.5){    // Contrasts color picker and white.
		$('#container').css('color','black');                // Sets font to black if contrast score is low
	};
});


// ----- Functions ---------------


function clearGrid (){
// Uses the .empty method to remove all child nodes from the table #pixelCanvas.
	$('#pixelCanvas').empty()
}



function makeGrid() {
// Creates the pixel canvas by getting the height and width from the <input> type number elements.
//							                            Delcared variables as const or let.
	const grid = $('#pixelCanvas');					 // Pointing back to <table>.
	let width = $("#inputWidth").val();				 // Storing the values for height and width.
	let height = $('#inputHeight').val();
//													    Declared variables used in FOR loops with let.
	for(let i=0;i<height;i++){						 // This loop creates the number of rows (height).
		grid.append('<tr></tr>');					 // Creates the child nodes <tr> for the <table> element.

		for(let j=0;j<width;j++){					 // This loop creates the number of columns (width).
			$('tr').last().append('<td></td>');		 // Creates the child nodes <td> for the <tr> elements.
		}											 // Used the .append method in order to add the new element at end of the list.
	}

}

function selectColor (){
// Keeps track of the color selected by the user
	return $('#colorPicker').val();						// Returns the color that is slected in the color pallet.
}
