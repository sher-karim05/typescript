//Number type
var n = 23;
// if you want to declare a string with a n it returns error
var nam = "karim";
console.log(nam);
//for this we use type any .
//boolean
var isPlayer = true;
console.log(isPlayer);
//Array type
var friends = ["zilan", "hussnain", "muiz", "sher karim"];
console.log(friends);
//enum type
var Fruits;
(function (Fruits) {
    Fruits[Fruits["apple"] = 0] = "apple";
    Fruits[Fruits["orage"] = 1] = "orage";
    Fruits[Fruits["banana"] = 2] = "banana";
    Fruits[Fruits["mango"] = 3] = "mango";
    Fruits[Fruits["pear"] = 4] = "pear";
})(Fruits || (Fruits = {}));
console.log(Fruits.mango);
