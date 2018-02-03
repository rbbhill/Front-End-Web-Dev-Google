var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function (element,index,array){
    if (element % 3 === 0) {
        element  += 100;
        test [index]= element;
    }
  }
);
console.log(test);
