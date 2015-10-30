var nonContiguousMaxSubarray = function(arr) {
  var max = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (max < 0 && arr[i] > max) {
      max = arr[i];
    }else {
      if (max + arr[i] > max) {
        max = max + arr[i];
      }
    }
  }
  return max;
};

var maxSubarray = function(arr) {
  var maxSoFar = arr[0];
  var maxEndingHere = arr[0];
  for (var i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
};

var processData = function(input) {
  var splitInput = input.split('\n');
  var n = parseInt(splitInput[0], 10);
  var output = [];
  for (var i = 1; i <= 2 * n - 1; i += 2) {
    var arr = splitInput[i + 1]
      .split(' ')
      .map(function(j){
        return parseInt(j, 10);
      });
    output.push(
      [maxSubarray(arr), nonContiguousMaxSubarray(arr)].join(' ')
    );
  }
  console.log(output.join('\n'));
};

var input = `5
4
1 2 3 4
6
-1 2 -1 2 3 4 -5
5
-1 -2 -3 -4 -5
4
0 -1 0 3
8
1 -16 15 23 -53 75 80 -24`;
processData(input);
