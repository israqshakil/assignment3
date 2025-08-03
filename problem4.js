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
