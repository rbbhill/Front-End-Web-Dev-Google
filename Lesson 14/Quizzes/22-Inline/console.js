function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
  emotions("happy", function laugh(num) {
    var result = "";
    for (x = 0; x < num; x++) {
        result += "ha";
    }
    return result + "!";
})
