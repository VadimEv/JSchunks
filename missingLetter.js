
function fearNotLetter(str) {
  var codeArr = [];
  for (i=0; i<str.length; i++){
    codeArr.push(str.charCodeAt(i));
  }
  console.log(codeArr);
  for(var i = 1; i < codeArr.length; i++) {
    if(codeArr[i] - codeArr[i-1] != 1) {
       var missing = codeArr[i] - 1;
       return String.fromCharCode(missing);
     }
  }
}

fearNotLetter("abcdefghjklmno");
