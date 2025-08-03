/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var land = area / 2;
console.log(land);

/** Problem -02 ( Cycle or Laptop ) */
var money = 11000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate ");
}

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

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var ext = [".pdf", ".docx"];
var ext4L = fileName.slice(-4);
var ext5L = fileName.slice(-5);
if (fileName[0] === "#") {
  console.log("Store");
} else if (ext.includes(ext4L) || ext.includes(ext5L)) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "Monu", roll: 99, department: "Eee" };
//write your code here
var result =
  student.name.toLowerCase() +
  student.roll +
  "." +
  student.department.toLowerCase() +
  "@ph.ac.bd";
console.log(result);

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
