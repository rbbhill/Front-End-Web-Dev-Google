$(document).ready(function() {
  // When size is submitted by the user, call makeGrid()
  $('form').on('submit', function(e) {
    e.preventDefault();
    // Clear grid when clicking submit button again.
    $('.row').remove();
    // Invoke makeGrid function.
    makeGrid();
  })

// function to create grid based on input values.
  function makeGrid() {
    let canvas = $('#pixelCanvas');
    let row = $('#inputHeight').val();
    let pixels = $('#inputWidth').val();

    let $row = $('<tr></tr>', {class: 'row'});
    let $pixels = $('<td></td>', {class: 'pixel'});
    // Use of clone() to create html elements. Otherwise nested for loops were buggy, credit StackOverflow.
    for (var n = 0; n < pixels; n++) {
      $row.append($pixels.clone());
    }

    for (var m = 0; m < row; m++) {
      canvas.append($row.clone());
    }
    // Event handler, selects color for squares when clicked.
    $('td').on('click', function(e) {
      let color = $('#colorPicker').val();

      $(this).css('background-color', color);
    })

  }
});
