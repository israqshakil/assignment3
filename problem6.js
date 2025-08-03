/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var presentSalary = startingSalary;

for (var year = 1; year <= experience; year++) {
  presentSalary += presentSalary * 0.05;
}
presentSalary = presentSalary.toFixed(2);
console.log(presentSalary);
