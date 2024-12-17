var url ="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/HBCU%20Enrollment.csv";

var rawYears = getColumn(url, 1);
var years = [];
for (var i = 0; i < rawYears.length; i++) {
    years.push(parseInt(rawYears[i]));
}
var totalEnrollment = getColumn (url, 2);
// console.log (totalEnrollment);
var males = getColumn (url, 3);
console.log (males)
var females = getColumn (url, 4);
console.log (females)
var chooseYear = document.getElementById("year")
for (var i = 0; i < years.length; i++) {
    var el = document.createElement("option");

el.innerHTML = years[i];
el.value = years [i];
chooseYear.appendChild(el);
} 



