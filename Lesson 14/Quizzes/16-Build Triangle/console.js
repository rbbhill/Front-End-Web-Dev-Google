function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";

}
// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(x) {
  var width = '';
  for (var triangle = 1; triangle <= x; triangle++) {
    width += makeLine(triangle);
  }
    return width;
}
//console.log(buildTriangle(10));
