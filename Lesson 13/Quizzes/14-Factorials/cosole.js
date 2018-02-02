function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorialize(12));

var solution = 1;
    for (var x=12; x>0; x-=1){
    solution*=x;
}
console.log(solution);
