var knapsack = function(k, arr) {
  var output = [];
  for (var i = 0; i <= arr.length; i++) {
    output.push([]);
    for (var j = 0; j <= k; j++) {
      output[i].push(0);
    }
  }
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; j <= k; j++) {
      if (i === 0 || j === 0) {
        output[i][j] = 0;
      } else {
        var f1 = output[i - 1][j];
        if (arr[i - 1] <= j) {
          var f2 = output[i][j - arr[i - 1]] + arr[i - 1];
          output[i][j] = Math.max(f1, f2);
        } else {
          output[i][j] = f1;
        }
      }
    }
  }
  return output[arr.length][k];
};

var processData = function(input) {
  var splitInput =input
    .split('\n')
    .map(function(line){
      return line.trim();
    });
  var output = [];
  var n = parseInt(splitInput[0], 10);
  for (var i = 1; i <= 2 * n; i += 2) {
    var k = parseInt(splitInput[i].split(' ')[1], 10);
    var arr = splitInput[i + 1]
      .split(' ')
      .map(function(j){
        return parseInt(j, 10);
      });
    output.push(knapsack(k, arr));
  }
  console.log(output.join('\n'));
};


var input;

input = `6
3 12
1 6 9
5 9
3 4 4 4 8
1 6
5
6 8
3 3 3 3 3 3
9 10
9 4 4 9 4 9 9 9 9
1 6
5`;

processData(input);
