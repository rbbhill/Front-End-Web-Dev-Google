$(function() {
  // Select color input
  // Select size input
  // When size is submitted by the user, call makeGrid()

  const submitBtn = $('input[type="submit"]'),
    canvas = $('#pixel_canvas');

  function makeGrid() {
    let col = $("#input_height").val(),
      row = $("#input_width").val(),
      canvasCol,
      canvasRow;

    canvas.children().remove();

    for (let i = 0; i < col; i++) {
      canvasCol += "<tr></tr>";
    }

    for (let j = 0; j < row; j++) {
      canvasRow += "<td></td>";
    }

    canvas
      .append(canvasCol)
      .children()
      .append(canvasRow);
  }

  submitBtn.click(function(e) {
    e.preventDefault();
    makeGrid();
  });

  canvas.on("click", "td", function(e) {
    e.preventDefault();
    let color = $("#colorPicker").val(),
      defaultColor = this.style.backgroundColor;
    // set color and erase color to default
    if (defaultColor === "") {
      $(this).css("backgroundColor", color);
    } else {
      $(this).css("backgroundColor", "");
    }
  });
});
