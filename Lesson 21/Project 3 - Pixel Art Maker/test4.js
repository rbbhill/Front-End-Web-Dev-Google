/*

SPrager Pixel Art Maker Project
Last edited 2/2/18

*/

// SELECT INPUT FUNCTIONS
// Select color input (based on user input)

var selectedColor = '#000000'; // Default color of black

$('#colorPicker').change(function selectColor() {
   selectedColor = $(this).val();
});


// Select grid size height and width (based on user input)
// Default is 1 each (default settings on input)
var selectedHeight = 1;
var selectedWidth = 1;

$('#inputHeight').change(function selectHeight() {
   selectedHeight = $(this).val();
});

$('#inputWeight').change(function selectWidth() {
   selectedWidth = $(this).val();
});

// PAINT GRID FUNCTION
// When a table cell in the grid is clicked, change the background color according to what is selected
// NOTE - We need to use the body as the "anchor" element here since it exists when the DOM is first created
$('body').on('mousedown', 'td', function changeColor() {
	$(this).css('background-color', selectedColor);
});


// ERASE GRID FUNCTION
// When a table cell in the grid is double-clicked, revert the background color back to no fill
$('body').on('dblclick', 'td', function changeColor() {
	$(this).css('background-color', 'transparent');
});


// MAKE GRID FUNCTION
// When size is submitted by the user (through button click), call makeGrid()
$('#submitButton').click(function makeGrid() {

	// Create blank gridTable item start
	var gridTable = "<table id=\"pixelCanvas\">";

	// Loop through and add table rows
	for (i = 0; i < selectedHeight; i++) {
		gridTable += "<tr>";
		// Loop through and add table cells / columns
		for (j = 0; j < selectedWidth; j++) {
			gridTable += "<td></td>";
		}
		gridTable += "</tr>";
	}
	gridTable += "</table>";

	// Replace old table with new one
	$('#pixelCanvas').replaceWith(gridTable);

	// Don't reload page when done!
	return false;
});
