/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
//let age = 29;
//const votingAge = 18;
//if (age >= 18) {
//    console.log(true)
//}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1;
let var2 = 8;
if (var2 < 10) {
    var1 = true;
} else {
    var1 = false;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

//console.log(parseInt('1999'));

// or

//console.log(Number('1999'));



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    let result = a * b

    return result
}

//console.log(multiply(2,3));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function toDogYears(age) {
    let dogYears;
    dogYears = age * 7;

    return dogYears;
}

//console.log(toDogYears(7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function feedDog(weight, ageInMonths) {
    let foodResult;
    let newWeight = Math.round(weight);
    if (ageInMonths >= 12) {
        if (newWeight <= 5) {
            foodResult = newWeight * 0.05;
        } else if (newWeight > 5 && newWeight <= 10) {
            foodResult = newWeight * 0.04;
        } else if (newWeight > 10 && newWeight <= 15) {
            foodResult = newWeight * 0.03;
        } else if (newWeight > 15) {
            foodResult = newWeight * 0.02;
        }
    } else if (ageInMonths < 12) {
        if (2 <= ageInMonths <= 4) {
            foodResult = newWeight * 0.10;
        } else if (ageInMonths > 4 && ageInMonths <= 7) {
            foodResult = newWeight * 0.05
        } else if (ageInMonths > 7 && ageInMonths <= 12) {
            foodResult = newWeight * 0.04
        } else {
            return "Your dog is not 2 months old and doesn't get any food, yet. Find the mama or maybe surrogate feed it yourself."
        }
    }

    return foodResult;
};

//console.log(feedDog(15,12));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rps(userThrow) {
    let comp = Math.random();
    let compThrow;
    if (comp <= 0.33) {
        compThrow = 'r';
    } else if (comp > 0.33 && comp <= 0.66) {
        compThrow = 'p';
    } else if (comp > 0.66) {
        compThrow = 's'
    }

    userThrow = userThrow[0];
    let result;
    if (userThrow === compThrow) {
        result = 'Throw again'
    } else if (userThrow === 'r') {
        if (compThrow === 's') {
            result = 'You won!'
        } else if (compThrow === 'p') {
            result = 'You lost!'
        }
    } else if (userThrow = 'p') {
        if (compThrow === 'r') {
            result = 'You won!'
        } else if (compThrow === 's') {
            result = 'You lost!'
        }
    } else if (userThrow = 's') {
        if (compThrow === 'p') {
            result = 'You won!'
        } else if (compThrow === 'r') {
            result = 'You lost!'
        }
    } else {
        return 'Not a valid input'
    }

    return result;
}

//console.log(rps('paper'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMi(kiloms) {
    let result;
    result = kiloms * 0.621371;

    return result;
}

//console.log(kmToMi(10));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function ftToCm(feet) {
    let result;
    result = feet * 30.48;

    return result;
}

//console.log(ftToCm(5));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(annoyanceLevel) {
    for (i = Number(annoyanceLevel); i !== 0; i--) {
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer, take one down pass it arround ${i - 1} bottles of beer on the wall`)
    }
}

//annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grader(grade) {
    let result;
    let mark = grade.toString();
    if (mark >= 0 && mark < 60) {
        result = 'F';
    } else if (mark >= 60 && mark < 70) {
        result = 'D';
    } else if (mark >= 70 && mark < 80) {
        result = 'C';
    } else if (mark >= 80 && mark < 90) {
        result = 'B';
    } else if (mark >= 90 && mark <= 100) {
        result = 'A';
    } else {
        result = "Wow, somehow you either got less than a zero or more than 100. Either way, I'm dumbfounded!"
    }

    return result;
}

//console.log(grader(88));
//console.log(grader(98));
//console.log(grader(60));
//console.log(grader(101));
//console.log(grader(-1));




/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function cntVowels(word) {
    let result;
    let wordLower = word.toString().toLowerCase();
    let count = 0;
    const vowels = 'aeiou';
    for (i = 0; i < wordLower.length; i++) {
        if (vowels.includes(wordLower[i])) {
            count++;
        }
    }

    return count;
}

//console.log(cntVowels('strIngcheEse'));
//console.log(cntVowels('Love'));
//console.log(cntVowels('Obituary'));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function playRps() {
    let userInput = window.prompt('Rock, Paper, Scissors: ')
    let userThrow = userInput[0].toLowerCase().charCodeAt().toString(10);

    let comp = Math.random();
    let compThrow;
    if (comp <= 0.33) {
        compThrow = 112;
    } else if (comp > 0.33 && comp <= 0.66) {
        compThrow = 114;
    } else if (comp > 0.66) {
        compThrow = 115;
    }

    if (userThrow == compThrow) {
        alert('Throw again');
    } else if (userThrow == 112) {
        if (compThrow == 115) {
            alert('You lose');
        } else {
            alert('You win');
        };
    } else if (userThrow == 114) {
        if (compThrow == 112) {
            alert('You lose');
        } else {
            alert('You win');
        };
    } else if (userThrow == 115) {
        if (compThrow == 114) {
            alert('You lose');
        } else {
            alert('You win');
        };
    } else {
        alert('Invalid choice');
    };
};

playRps();