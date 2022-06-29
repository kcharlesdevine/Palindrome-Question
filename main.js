const isPalindrome = function(userInput) {
  let flatString = userInput.toLowerCase();
  let splitString = flatString.split('');
  let reversedArray = splitString.reverse();
  let reversedString = reversedArray.join('');
    if (flatString === reversedString){
      return true 
    } 
     else {
      return false
    }
  };
