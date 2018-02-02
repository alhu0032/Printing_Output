
// Task 1
var a , b,c, output_1;
a = 3;
b = 5;
 output_1 = "var a = 3 ; \n var b= 5;\n var c; \n -----------------------------\n      " + "a + b = "+(a+b)+ "\n"+
     "a - b = "+(a-b)+"\n"+
     "a * b = "+(a*b)+"\n"+
     "a / b = "+(a/b)+"\n"+
     "a % b= "+ (a%b)+"\n"+
     "(a += b): "+ (a+= b)+"\n"+
     "(a -= b): "+(a-= b)+"\n"+
     "(a *= b): "+(a*= b)+"\n"+
     "(a /= b): "+(a/= b)+"\n"+
     "(a %= b): "+(a%= b)+"\n"+
     "(a == b): "+(a == b )+"\n"+
     "(a != b): "+(a != b )+"\n"+
      "(a > b): "+(a > b )+"\n"+
      "(a < b ): "+(a < b )+"\n"+
      "(!a  && !c): "+(!a && !c )+"\n"+
     "(!a || !c): "+(!a || !c )+"\n";

     

alert(output_1);

//------------------------------------
//Task 2
 var first_name =" Nour"; 
var last_name="Alhusban ";
var email=" alhu0032@algonquinlive.com ";
var output_2 = " My Name is:  " + first_name +" "+ last_name +"."+"\n"+ "You Can contact me at : " +email +" . ";

alert(output_2);    
//--------------
//task 3

let numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
 let n1 = numbers[0];
 let n2 = numbers[(numbers.length - 1)];
 let sum = (n1 + n2);


if (sum % 2 === 0){
    alert (sum + " is even");
} else {
    alert(sum + " is odd");
}




