/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
    return new Promise((fulfilled, reject) => {
         if(number >= 10) {fulfilled (number + ' is greater or equal to 10');
        } else {
            reject (number + ' is less than 10');
        }
        });

    };

 testNum(11)
    .then(result => console.log (result))
    .catch(error => console.log(error));

    testNum(8)
    .then(result => console.log (result))
    .catch(error => console.log(error));

//hmm, en wat nu als ie echt 10 is?

    testNum(10)
    .then(result => console.log (result))
    .catch(error => console.log(error));
/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if (
        words.every(word => {
            return typeof word === 'string';
        })
        ){
        resolve (sortWords(words.map(word => {return word.toUpperCase();
        })
        )
        );
       } else {
           reject ('no string');
       }
       });
   };
  
const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve (words.sort());
        } else {
            reject('strings only!');
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

const complicatedArray = ['cucumber', 44, true];
makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));
// call both functions, chain them together and log the result to the console

