function rot13(str) { // LBH QVQ VG!
  var curChar = '';
  var codedStr = [];
  for (let i=0; i < str.length; i++){
    if (str.charCodeAt(i)  < 65 || str.charCodeAt(i) > 90) {
      curChar = str.charAt(i);
    } else if (str.charCodeAt(i)  < 78) {
      curChar = String.fromCodePoint(str.charCodeAt(i) + 13 );
    } else {
      curChar = String.fromCodePoint(str.charCodeAt(i) - 13 );
    }
    codedStr.push(curChar);
  }
  return codedStr.join("");
}

// Change the inputs below to test
rot13("SERR CVMMN!");
