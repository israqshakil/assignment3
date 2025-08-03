/** Problem -03 ( Medicine Planner ) */
var lastDay = 9;
//write your code here
for (var d = 1; d <= lastDay; d++) {
  if (d % 3 === 0) {
    console.log(d + " - medicine");
  } else {
    console.log(d + " - rest");
  }
}
