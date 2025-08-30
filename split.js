//1.
var Today = "Today was a very productive day";
var split1 = Today.split(" ",4);
console.log(split1);

//2.
var string = "This is going to be fun looking into the string method";
var split2 = string.split(" ",6);
console.log(split2);
console.log(string.split("g"));
console.log(string.split("g", 3));
console.log(string.split(" ",3));

//3.
var tricky = "goshgoshgoshgoshgoshgoshgoshgo";
console.log(tricky.split("sh",8));
