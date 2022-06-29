const isPalindrome = function(str) {
  let flatString = string.toLowerCase();
  let splitString = flatString.split('');
  let reversedArray = splitString.reverse();
  let reversedString = reversedArray.join('');
    if (flatString == reversedString){
      console.log('true')
    } else {
      console.log('false')
    }
  };

let string = 'Bridge'
isPalindrome(string);
