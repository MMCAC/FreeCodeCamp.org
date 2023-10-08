// Para comentar na mesma linha dentro de um js

//------------------------------------------------------------------------------------------------------

/*
Para
comentar 
em
múltiplas
linhas
*/

//------------------------------------------------------------------------------------------------------

/*
Data Types: undefined, null, boolean , string, symbol, number and object.
*/

var myName = "Beau"; // The var is going to be used throughout the whole program.

myName = 8;

let ourName = "freeCodeCamp"; //let will only be used within the scope of where you declared that.

const pi = 3.14; // Const is a variable that should never change. If you try it you'll get a error.

console.log(pi); // Allows you to see things in the log

//------------------------------------------------------------------------------------------------------

// Storing Values with Assignment Operator

var a = 3;

a += 7; // a = a + 7;
a -= 1; // a = a - 1;
a *= 8; // a = a * 8;
a /= 9; // a = a / 9;

console.log(a);

//------------------------------------------------------------------------------------------------------

// Initializing Variables w/ Assignment Operator

var p = 2;

//------------------------------------------------------------------------------------------------------

// Unitialized Variables

var h;

//------------------------------------------------------------------------------------------------------

// Case Sensitivity in Variables

var StUdLyCapVaR;
var studlycapvar;

studlycapvar = 9000000000;

console.log(studlycapvar);

//------------------------------------------------------------------------------------------------------

// Adding Nummbers

var sum = 10 + 10;
console.log(sum);

//------------------------------------------------------------------------------------------------------

// Subtracting Numbers

var difference = 45 - 33;
console.log(difference);

//------------------------------------------------------------------------------------------------------

// Multiplying Numbers

var product = 8 * 10;
console.log(product);

//------------------------------------------------------------------------------------------------------

// Dividing Numbers

var quotient = 66 / 33;
console.log(quotient);

//------------------------------------------------------------------------------------------------------

// Incremnenting Numbers

var myVar = 87;
myVar++; // myVar = myVar + 1;
console.log(myVar);

//------------------------------------------------------------------------------------------------------

// Decrementing Numbers

var myVar2 = 11;
myVar2--; // myVar2 = myVar2 - 1;
console.log(myVar2);

//------------------------------------------------------------------------------------------------------

// Decimal Numbers

var ourDecimal = 5.7;
console.log(ourDecimal);

//------------------------------------------------------------------------------------------------------

// Multiply Decimals

var product2 = 2.0 * 2.5;
console.log(product2);

//------------------------------------------------------------------------------------------------------

// Divide Decimals

var quotient2 = 4.4 / 2.0;
console.log(quotient2);

//------------------------------------------------------------------------------------------------------

// Finding Remainder

var remainder2;

remainder2 = 11 % 3;
console.log(remainder2);

//------------------------------------------------------------------------------------------------------

// Compound Assignment with Augmented Addition

var q = 3;

q += 12;
console.log(q);

//------------------------------------------------------------------------------------------------------

// Compound Assignmetn with augmented Subtraction

var w = 10;

w -= 1;
console.log(w);

//------------------------------------------------------------------------------------------------------

// Compound Assigment with augmented Multiplication

var t = 5;

t *= 9;

console.log(t);

//------------------------------------------------------------------------------------------------------

// Compound Assignment with Augmented Division

var y = 48;

y /= 4;
console.log(y);

//------------------------------------------------------------------------------------------------------

// Declare String Variables

var firstName0 = "Something";
console.log(firstName0);

//------------------------------------------------------------------------------------------------------

// Escaping Literal Quotes in Strings

var myStrg = "I am a \"double quote\"!"  // How to show quotes
console.log(myStrg);

//------------------------------------------------------------------------------------------------------

// Quoting Strings with Single Quotes

var myStrg = 'I am a "double quote"!'  // How to show quotes (Second form to show it!)

//------------------------------------------------------------------------------------------------------

// Escape Sequences in Strings

/*

    CODE OUTPUT
\'      single quote
\'      single quote
\\      single quote
\n      single quote
\r      carriage return
\t      tab
\b      backspace
\f      form feed

*/

var myString = "FirstLIne\n\t\\SecondLine\nThirdLine";

console.log(myString);

//------------------------------------------------------------------------------------------------------

// Concatenating Strings with Plus Operator

var ourStr = "I come first." + "I come second."
console.log(ourStr);

//------------------------------------------------------------------------------------------------------

// Concatenating Strings with Plus Equals Operator

var ourstr1 = "I come first."
ourstr1 += "I come second."
console.log(ourstr1);

//------------------------------------------------------------------------------------------------------

//Constructing Strings with Variables

var myName2 = "Maicon";
var myStr2 = "My name is " + myName2 + ", and I am well!";

console.log(myStr2);

//------------------------------------------------------------------------------------------------------

// Appending Variables to Strings

var someAdjective = "worthwhile!";
var myStr3 = "Learning to code is ";
myStr3 += someAdjective;

console.log(myStr3);

//------------------------------------------------------------------------------------------------------

// Find Lenght of String

var lastNameLength = 0;
var lastName = "Maicon";

lastNameLength = lastName.length;
console.log(lastNameLength)

//------------------------------------------------------------------------------------------------------

// Bracket Notation to Find First Chracter in String

var firstLetterOfFirstName = "";
var firstName = "Maicon";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);

//------------------------------------------------------------------------------------------------------

// String Immutability

var myStr4 = "Jello, World!"

myStr4[0] = "H"; // Não tem como mudar.

console.log(myStr4);

//------------------------------------------------------------------------------------------------------

// Bracket Notation to Find Nth Character in String

var firstName2 = "Maicon";
var secondLetterOfFirstName = firstName2[1];
console.log(secondLetterOfFirstName);

//------------------------------------------------------------------------------------------------------

// Bracket Notation to Find Last Character in String

var firstName3 = "Maicon";
var lastLetterOfFirsName = firstName3[firstName3.length - 1];
console.log(lastLetterOfFirsName);

//------------------------------------------------------------------------------------------------------

// Bracket Notation to Find Nth-to_last Character in String

var firstName4 = "Maicon";
var thirdToLastLetterOfFirstName = firstName4[firstName4.length - 3];
console.log(thirdToLastLetterOfFirstName);

//------------------------------------------------------------------------------------------------------

// Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//------------------------------------------------------------------------------------------------------

// Store Multiple Values with Arrays

var ourArray = ["John", 23];
console.log(ourArray[0]);

//------------------------------------------------------------------------------------------------------

// Nested Arrays - Matriz

var ourArray2 = [["the universe", 42], ["everything", 101010]];

console.log(ourArray2[0]);

//------------------------------------------------------------------------------------------------------

// Access Array Data With Indexes

var ourArray3 = [10, 20, 30]
var ourData = ourArray3[0]; 
console.log(ourData);

//------------------------------------------------------------------------------------------------------

// Modify Array Data With Indexes

var ourArray4 = [10, 20, 30];
ourArray4[1] = 45;

console.log(ourArray4);

//------------------------------------------------------------------------------------------------------

// Access Multi-Dimensional Arrays With Indexes

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var myData = myArray[0][0];
console.log(myData);

//------------------------------------------------------------------------------------------------------

// Manipulate Arrays with push()

var ourArray5 = [1, 2, 3];
ourArray5.push(4, 5);
console.log(ourArray5);

//------------------------------------------------------------------------------------------------------

// Manipulate Arrays with pop()

var ourArray6 = [1, 2, 3];
var removedFromOurArray = ourArray6.pop(); // Remove the last element

console.log(removedFromOurArray);
console.log(ourArray6);

//------------------------------------------------------------------------------------------------------

// Manipulate Arrays with shift()

var ourArray7 = ["Simpson", "J", ["cat"]];
var removedFromOurArray2 = ourArray7.shift(); // Remove the first element of the array.

ourArray7[1][2] = "Ops";
console.log(removedFromOurArray2);
console.log(ourArray7);

//------------------------------------------------------------------------------------------------------

// Manipulate Arrays with unshift()

var ourArray8 = ["Stimpsonn", "J", "cat"];
ourArray8.shift(); // Remove the first variable of the array
ourArray8.unshift("Happy"); // Insert the variable in the first slot
console.log(ourArray8);

//------------------------------------------------------------------------------------------------------

// Shopping List

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//------------------------------------------------------------------------------------------------------

// Write Reusable Code with Functions

function ourReusableFunction()
{
    console.log("Hello, World!");
}

ourReusableFunction();

//------------------------------------------------------------------------------------------------------

//Passing Values to Functions with Arguments

function ourFunctionWithArgs(a, b)
{
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);

//------------------------------------------------------------------------------------------------------

// Global Scope and Functions

var myGlobal = 10;

function fun1()
{
    oopsGlobal = 5; // Without the use of the keyword "var", the variable becomes global automatically
}



function fun2()
{
    var output = "";

        if(typeof myGlobal != "undefined")
        {
            output += "myGlobal: " + myGlobal;
        }
        if(typeof oopsGlobal != "undefined")
        {
            output += "oopsGlobal: " + oopsGlobal;
        }

        console.log(output);
}

fun1(); // There is the need to start the function to create the global variable.
fun2();

//------------------------------------------------------------------------------------------------------

// Local Scope and Functions

function myLocalScope()
{
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//------------------------------------------------------------------------------------------------------

// Global vs. Local Scope in Functions

var outerWear = "T-shirt";

function myOutfit()
{
    var outerWear = "sweater";

    return outerWear; // It takes the global variable if there's nothing defined in the function
}

console.log(myOutfit()); 
console.log(outerWear);

//------------------------------------------------------------------------------------------------------

// Return a Value from a Function with Return 

function minusSeven(num)
{
    return num - 7;
}

console.log(minusSeven(10));

//------------------------------------------------------------------------------------------------------

// Understanding Undefined Values Returned from a Function

var sum = 0;
function addThree()
{
    sum = sum + 3;
}

function addFive()
{
    sum += 5;
}

addThree();
console.log(sum);
addFive();
console.log(sum);

//------------------------------------------------------------------------------------------------------

// Assignment wih a Returned Value

var changed = 0;

function change(num)
{
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

//------------------------------------------------------------------------------------------------------

// Stand in Line

function nextInLine(arr, item) // Recebeu com parâmetros um array e um item
{
    arr.push(item); // Colocou no final
    return arr.shift(); // Eliminou o primeiro termo do array e reorganizou o array
}

var testArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArray)); // JSON.stringify("Nome do array") -> Tem como objetivo transformar o array em uma string
console.log(nextInLine(testArray, 6));
console.log("After: " + JSON.stringify(testArray));

//------------------------------------------------------------------------------------------------------

// Boolean Values

function welcomeToBooleans()
{
    return false;
}

//------------------------------------------------------------------------------------------------------

// Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue)
{
    if(wasThatTrue)  // If it's true
    {
        return "Yes, that was true";
    }

    return "No, that was false"; // There is no need for the else (If it's not true)
}

console.log(trueOrFalse(true));

//------------------------------------------------------------------------------------------------------

// Comparison with the Equality Operator

function testEqual(val)
{
    if(val == 12)
    {
        return "Equal";
    }

    return "Not Equal";
}

console.log(testEqual(10));

//------------------------------------------------------------------------------------------------------

// Comparison with the Strict Equality Operator

function testStrict(val)
{
    if(val === 7)
    {
        return "Equal";
    }

    return "Not Equal";
}

console.log(testStrict(10));

//------------------------------------------------------------------------------------------------------

// Practice Comparing Different Values

function compareEquality(a, b)
{
    if(a === b)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, '10'));

//------------------------------------------------------------------------------------------------------

// Comparison with the Inequality Operator

function testNotEqual(val)
{
    if(val != 99)
    {
        return "Not Equal";
    }

    return "Equal";
}

console.log(testNotEqual(10));

//------------------------------------------------------------------------------------------------------

// Comparison wit the Strict Inequality Operator

function testStrictNotEqual(val)
{
    if(val !== 17)
    {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual('17'));

//------------------------------------------------------------------------------------------------------

// Comparison with the Logical And Operator 

function testGreaterThan(val)
{
    // Preocupar-se com a ordenação dos if's
    if(val > 100)
    {
        return "Over 100";
    }

    if(val > 10)
    {
        return "Over 10";
    }

    return "10 or Under"
}

console.log(testGreaterThan(111));

//------------------------------------------------------------------------------------------------------

// Comparison with the Grater Than Or Equal To Operator

function testGreaterOrEqual(val)
{
    if(val >= 20)
    {
        return "20 or Over";
    }

    if(val >= 10)
    {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(100));

//------------------------------------------------------------------------------------------------------

// Comparison with the Less Tahn Operator

function testLessThan(val)
{
    if(val < 25)
    {
        return "Under 25";
    }

    if(val < 55)
    {
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(55));

//------------------------------------------------------------------------------------------------------

// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val)
{
    if(val <= 12)
    {
        return "Samller Than or eqaul to 12";
    }
    if(val <= 24)
    {
        return "Smaller Than or Equal to 24";
    }

    return "More than 24";
}

console.log(testLessOrEqual(25));

//------------------------------------------------------------------------------------------------------

// Comparisons with the Logical And Operator

function testLogicalAnd(val)
{
    if(val <= 50 && val >= 25)
    {
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(10));

//------------------------------------------------------------------------------------------------------

// Comparisons with the Logical Or Operator

function testLogicalOr(val)
{
    if(val < 10 || val > 20)
    {
        return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(15));

//------------------------------------------------------------------------------------------------------

// Else Statements

function testElse(val)
{
    var result = "";
    
    if(val > 5)
    {
        result = "Bigger than 5"; 
    }
    else
    {
        result = "5 or Smaller";
    }

    return result;
}

console.log(testElse(6));

//------------------------------------------------------------------------------------------------------

// Else if Statements

function testElseIf(val)
{
    if(val > 10)
    {  
        return "Greater tham 10";
    }
    else if(val < 5)
    {
        return "Smaller than 5";
    }
    else
    {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));

//------------------------------------------------------------------------------------------------------

// Logical Order in If Else Statemets

function orderMyLogical(val)
{
    if(val < 5)
    {
        return "Less than 5";
    }
    else if(val < 10)
    {
        return "Less than 10";
    }
    else
    {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogical(1));

//------------------------------------------------------------------------------------------------------

// Chaining If Else Statements

/*
Write chained if/else if statements to fulfill the following consitions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num)
{
    if(num < 5)
    {
        return "Tiny";
    }
    else if( num < 10)
    {
        return "Small";
    }
    else if(num < 15)
    {
        return "Medium";
    }
    else if(num < 20)
    {
        return "Large";
    }
    else if(num >= 20)
    {
        return "Huge";
    }
}

console.log(testSize(25));

//------------------------------------------------------------------------------------------------------

// Golf Code

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par , strokes)
{
    if(strokes == 1)
    {
        return names[0];
    }
    else if (strokes <= par - 2)
    {
        return names[1];
    }
    else if(strokes == par - 1)
    {
         return names[2];
    }
    else if (strokes == par)
    {
        return names[3];
    }
    else if(strokes == par + 1)
    {
        return names[4];
    }
    else if(strokes == par + 2)
    {
        return names[5];
    }
    else if(strokes >= par + 3)
    {
        return names[6];
    }
}

console.log(golfScore(5, 8));

//------------------------------------------------------------------------------------------------------

// Switch Statements

function caseInSwitch(val)
{
    var answer = "";

    switch(val)
    {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

console.log(caseInSwitch(1));

//------------------------------------------------------------------------------------------------------

// Default Option in Swtich Statements

function swtichOfStuff(val)
{
    var answer = "";
    switch (val)
    {
        case "a":
            answer = "apple";
        case "b":
            answer = "bird";
        case "c":
            answer = "cat";
        default: // If the option its none of the above
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(swtichOfStuff(2));

//------------------------------------------------------------------------------------------------------

// Multiple Identical Options in Switch Statements

function sequentialSizes(val)
{
    var answer = "";

    switch(val)
    {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    return answer;
}

console.log(sequentialSizes(7));

//------------------------------------------------------------------------------------------------------

// Replacing If Else Chains with Switch 

function chainToSwtich(val)
{
    var answer = "";

    switch(val)
    {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "Te Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}

console.log(chainToSwtich(7));

//------------------------------------------------------------------------------------------------------

// Returning Boolean Values from Functions

function isLess(a , b)
{
    return a < b; // Will be true or false
}
console.log(isLess(10, 15));

//------------------------------------------------------------------------------------------------------

// Returning eraly Pattern from Functions

function abTest(a, b)
{
    if(a < 0 || b < 0)
    {
        return undefined;
    }

    return Math.round(Math.sqrt(a) + Math.sqrt(b), 2);
}

console.log(abTest(-2, 2));

//------------------------------------------------------------------------------------------------------

// Counting Cards

var count = 0;

function cc(card)
{
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold";
    if(count > 0)
    {   
        holdbet = 'Bet';
    }

    return count + " " + holdbet;


    return "Change Me";
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));

//------------------------------------------------------------------------------------------------------

// Build JavaScrit Objects

var OurDog = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//------------------------------------------------------------------------------------------------------

// Acessing Object Properties with Dot Notation

var testObj =
{
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj.shoes;

console.log(hatValue);
console.log(shirtValue);
console.log(shoesValue);

//------------------------------------------------------------------------------------------------------

// Acessing Objetc Properties with Bracket Notation

var testObj1 = 
{
    "an entree": "hambuger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj1["an entree"];
var drinkValue = testObj1['the drink'];

console.log(entreeValue);
console.log(drinkValue);

//------------------------------------------------------------------------------------------------------

// Acessing Object Properties with Variables

var testObj3 =
{
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj3[playerNumber];

console.log(player);

//------------------------------------------------------------------------------------------------------

// Updating Object Properties

var ourDog1 =
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog1.name = "Happy Camper";

console.log(ourDog1.name);

//------------------------------------------------------------------------------------------------------

// Add New Properties to an Object

var myDog =
{
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow-wow";

console.log(myDog.bark);

//------------------------------------------------------------------------------------------------------

// Delete Properties From an Object

var yourDog =
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow-wow"
};

delete yourDog.bark;

console.log(yourDog.bark);

//------------------------------------------------------------------------------------------------------

// Using Objects for Lookups

function phoneticLoopkup(val)
{
    var result = "";

    var lookup =
    {
        "alpha": "Adams",
        "bravo": "Baston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLoopkup("charlie"));

//------------------------------------------------------------------------------------------------------

// Testing Objects for Properties

var myObj4 =
{
    gift: "pony",
    pet: "kitten",
    bed: "sleigh" 
};

function checkObj(checkProp)
{
    if(myObj4.hasOwnProperty(checkProp))
    {
        return myObj4[checkProp];
    }
    else
    {
        return "Not Found";
    }
}

console.log(checkObj("gift"));

//------------------------------------------------------------------------------------------------------
 
// Manipulating Complex Objects
 
var myMusic = // Array with 2 objects without names
[  
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats":
        [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats":
        [
            "Youtube video",
            "Facebook video"
        ]
    }
];
 
//------------------------------------------------------------------------------------------------------
 
// Accessing Nested Objects
 
var myStorage =
{
    "car":
    {
        "inside":
        {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":
        {
            "truck": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside;
console.log(gloveBoxContents);

//------------------------------------------------------------------------------------------------------

// Accessing Nested Arrays

var myPlants =
[
    {
        type: "flowers",
        list:
        [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: 
        [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//------------------------------------------------------------------------------------------------------

// Record Collection

var collection =
{
    "2548":
    {
        "album": "Slippery When Wet",
        "artist": "Bon Javi",
        "tracks":
        [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":
    {
        "album": "1999",
        "artist": "Prince",
        "tracks":
        [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":
    {
        "artist": "Robert Palmmer",
        "tracks":
        [

        ]
    },
    "5439":
    {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); // Fancy way of JS to make a copy of the object

function updateRecords(id, prop, value)
{
    if(value === "")
    {
        delete collection[id][prop];
    }
    else if(prop === "tracks")
    {
        collection[id][prop] = collection[id][prop] || []; // It's going equall itself if it exists, or if it doesn't exist, we're going to create it.
        collection[id][prop].push(value);
    }
    else
    {
        collection[id][prop] = value;
    }

    return collection;
}
console.log(updateRecords(2468, "tracks", "test"))
console.log(updateRecords(5439, "artist", "ABBA"));

//------------------------------------------------------------------------------------------------------

// Iterate with While Loops

var myArray11 = [];

var i = 0;
while(i < 5)
{
    myArray11.push(i);
    i++
}

console.log(myArray11);

//------------------------------------------------------------------------------------------------------

// Iterate with For Loops

var ourArray22 = [];

for(var i = 0; i < 5; i++)
{
    ourArray22.push(i);
}

console.log(ourArray22);

//------------------------------------------------------------------------------------------------------

// Iterate Odd Numbers with a For Loop

var ourArray33 = [];

for(var i = 0; i < 10; i+=2)
{
    ourArray33.push(i);
}
console.log(ourArray33);


var myArray22 = [];

for(var i = 0; i < 10; i += 2)
{
    myArray22.push(i);
}
console.log(myArray22);

var myArray33 = [];

for(var i = 1; i < 10; i += 2)
{
    myArray33.push(i);
}
console.log(myArray33);

//------------------------------------------------------------------------------------------------------

// Count Backwards with a For Loop

var ourArray44 = [];

for(var i = 10; i > 0; i -= 2)
{
    ourArray44.push(i);
}

console.log(ourArray44);



var myArray44 = [];

for(var i = 9; i > 0; i -= 2)
{
    myArray44.push(i);
}

console.log(myArray44);

//------------------------------------------------------------------------------------------------------

// Iterate Through an Array with a For Loop

var ourArray55 = [9, 10, 11, 12];
var Total = 0;

for(var i = 0; i < ourArray55.length; i++)
{  
    Total += ourArray55[i];
}
console.log(Total);

//------------------------------------------------------------------------------------------------------

// Nesting For Loops

function multiplyAll2(arr)
{
    var product = 1;

    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr[i].length; j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}

var product3 = multiplyAll2([[1,2], [3,4], [5,6,7]]);
console.log(product3);

//------------------------------------------------------------------------------------------------------

// Iterate with Do...While Loops

var myArray55 = [];
var i = 10;

do
{
    myArray55.push(i);
    i++;
}
while(i < 5)

console.log(i, myArray55);

//------------------------------------------------------------------------------------------------------

// Profile Lookup

var contacts =
[
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Pointers"]
    },
    {
        "firstName": "Harry",
        "lastName": "Porter",
        "number": "0994372684",
        "likes": ["Hogawarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop)
{
    for(var i = 0; i < contacts.length; i++)
    {
        if(contacts[i].firstName === name)
        {
            return contacts[i][prop] || "No such property!";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "hello");
console.log(data);
//------------------------------------------------------------------------------------------------------

// Generate Random Fractions

function randomFraction()
{
    return Math.random(); // It returns a number 0 <= x <1
}

console.log(randomFraction());

//------------------------------------------------------------------------------------------------------

// Generate Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // Math.floor round down to the nearest whole number; Math.random() * 20 => 0<= x < 20

function randomWholeNum()
{
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
//------------------------------------------------------------------------------------------------------

// Generate Random Whole Numbers within a Range

function ourRandomRange(ourMin, ourMax)
{
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

console.log(ourRandomRange(5,15));
//------------------------------------------------------------------------------------------------------

// Use the parseInt Function

function convertToInteger(str)
{
    return parseInt(str);
}

console.log(convertToInteger("56"));

//------------------------------------------------------------------------------------------------------

// Use the parseInt Function with a Radix

function convertToInteger(str)
{
    return parseInt(str, 2);
}

var f = convertToInteger("100111");
console.log(f);

//------------------------------------------------------------------------------------------------------

// Use the Conditional (Terneary) Operator

// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b)
{
    return a === b ? true : false; // for simplificado
}

console.log(checkEqual(1, 2));

//------------------------------------------------------------------------------------------------------

// Use Multiple Conditional (Ternary) Operators

function checkSign(num)
{
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-10));

//------------------------------------------------------------------------------------------------------

// Differences Between the var and let Keywords

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk()
{
    "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions.

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;

}

console.log(catTalk());

//------------------------------------------------------------------------------------------------------

// Compare Scopes of the var an let Keywords

function checkScope()
{
    "use strict";
    let i = "function scope";
    if(true)
    {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Block scope i is: ", i)
}

checkScope();
//------------------------------------------------------------------------------------------------------

// Declare a Read-Only Variable with the const Keyword

function printManyTimes(str)
{
    "use strict";
    const SENTENCE = str + " is cool!"; // when you're using const is prefered to right the const in capital letters
    
    //sentence = str + " is amazing!";

    for(let i = 0; i < str.length; i+=2)
    {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");
//------------------------------------------------------------------------------------------------------

// Mutate an Array Declared with const

const s = [5, 7, 2];

function editInPlace()
{
    "use strict";

    // using bracket notation we can change the array
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);

//------------------------------------------------------------------------------------------------------

// Prevent Object Mutation

function freezeObj()
{
    "use strict";
    const MATH_CONSTANTS =
    {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // If you don't want any of items in the obejct to change

    try
    {
        MATH_CONSTANTS.PI = 99;
    }
    catch(ex)
    {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
//------------------------------------------------------------------------------------------------------

// Use Arrow Functions to Write Concise Anonymoues Functions

 // This function is called anonymous function because it doesn't have a name. Whenever you have a anonymous function, it can be changed to arrow function.
 
const magic1 = /*function*/() => new Date();

//------------------------------------------------------------------------------------------------------

// Write Arrow Functions with Parameters

/* Convert this function to an arrow function

            var myConcat = function(arr1, arr2)
            {
                return arr1.concat(arr2);
            }
            console.log(myConcat([1, 2], [3, 4, 5]));

*/

const myConcat2 = (arr1, arr2) => arr1.concat(arr2); // "concat" concatena os dois arrays.

console.log(myConcat2([1, 2], [3, 4, 5]));

//------------------------------------------------------------------------------------------------------

// Wrtite Higher Order Arrow Functions

// Arrow functions work really well with higher order functions such as map, filter, and reduce. They take functions as arguments for processing collections of data. Whenever the functions take another function as an argument, that's a good time for an arrow function.

            /*
                const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

                const squareList = (arr) =>
                {
                    const squaredIntegers = arr;
                    return squaredIntergers;
                };

                const squaredIntegers = squareList(realNumberArray);
                console.log(squaredIntergers);

                // O objetivo é calcular o quadrado dos números positivos
            */


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

    const squareList = (arr) =>
    {
        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // ".filter()" para filtrar. Dentro iremos colocar uma arrow function, mas como somente existe um argumento "num" não é necessário colocar parênteses. Depois da "arrow", colocaremos aquilo que será feito, nesse caso, "Number.isInteger(num)" irá pegar os inteiros e "num > 0" vai pegar os positivos. The result of the command will be an array with all the numbers selected. But after that, the ".map()" function takes a function as its argument, but instead of writing a full function out we can use an arrow function. "x" will be the argument that will take the selected numbers, and after the arrow, the square will be calculated
        return squaredIntegers;
    };

    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);
//------------------------------------------------------------------------------------------------------

// Write Higher Order Arrow Functions

const increment =
(
    function()
    {
        return function increment(number, value = 1) //Will define a base/decault value for the argument value
        {
            return number + value;
        }
    }
)();

console.log(increment(5,2));
console.log(increment(5));

//------------------------------------------------------------------------------------------------------

// Use the Rest Operator with Function Parameters

const sum3 = 
(
    function()
    {
        return function sum(...args)
        {
            // const args = [ x, y, z ];
            return args.reduce((a,b) => a + b, 0);
        };
    }
)();

console.log(sum3(1, 2, 3, 4));

//------------------------------------------------------------------------------------------------------

// Use the Spread Operator to Evaluate Arrays In-Place
// The spread operator looks just like the rest operator. But it expands an already existing array. Or it spreads out an array into its individual parts.

const arr01 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr02;
(
    function()
    {
        arr02 = [...arr01];
        arr01 = 'potato';
    }
)();

console.log(arr02);

//------------------------------------------------------------------------------------------------------

// Use Destructuring Assignment to Assign Variables from Objects

//------------------------------------------------------------------------------------------------------

// Understand the Differences Between import and require
//import {capitalizeString} from "./string_function";

//const cap = capitalizeString("hello!");
//console.log(cap);