var coinChange = function(N, arr) {
  var output = [];
  for (var m = 0; m < arr.length; m++) {
    output.push(new Array(N));
  }

  for (var m = 0; m < arr.length; m ++) {
    for (var n = 0; n <= N; n++) {
      var f1 = 0;
      var y1 = n - arr[m];
      if (y1 > 0) {
        f1 = output[m][y1];
      } else if (y1 === 0) {
        f1 = 1;
      }
      var f2 = 0;
      var x2 = m - 1;
      if (x2 >= 0) {
        f2 = output[x2][n];
      }
      output[m][n] = f1 + f2;
    }
  }
  return output[m - 1][N];
};

var processData = function(input) {
  var splitInput =input
    .split('\n')
    .map(function(line){
      return line.trim();
    });
  var n = parseInt(splitInput[0].split(' ')[0], 10);
  var arr = splitInput[1].split(' ');
  console.log(coinChange(n, arr));
};


var input;
input = `4 3
1 2 3`;

processData(input);

input = `10 4
2 5 3 6`;
processData(input);
