function palindrome(str) {
  // Good luck!
  var newStr = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
  if (newStr.split('').reverse().join('') === newStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("_eye");
