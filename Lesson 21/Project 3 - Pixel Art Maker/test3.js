function makeGrid() {
  let canvas = $('#pixelCanvas');

  //get height and width
  let h = $('#inputHeight').val();
  let w = $('#inputWeight').val();
  let size = $('#inputSize').val();

  //Clear existing grid
  canvas.children().remove();

  //create grid
  for (let r = 0; r < h; r++) {
    canvas.append("<tr></tr>");
    for (let c = 0; c < w; c++) {
      canvas.children('tr').last().append(`<td height='${size}px' width='${size}px'></td>`)
    }
  }
  // Add event listeners
  $('#pixelCanvas > tr > td').mousedown((evt) => {
    $(evt.target).attr('bgcolor', $('#colorPicker').val());
  });
  $('#pixelCanvas > tr > td').mouseenter((evt) => {
    if ($('#pixelCanvas > tr > td:active').length) {
      //change the color
      $(evt.target).attr('bgcolor', $('#colorPicker').val());
    }
  });

}

// Change grid on width/height/size changes
$('[id^="input"]').change((evt) => {
  evt.preventDefault();
  makeGrid();
});

//Create initial grid
makeGrid();
