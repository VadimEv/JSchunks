
function myReplace(str, before, after) {
  var curStr = str;
  str = curStr.replace(before, after);
  if(/[A-Z]/.test( before[0])){
    str = curStr.replace(before, after.toLowerCase().replace(/(^| )(\w)/g, String.toUpperCase));
  } else {
    str = curStr.replace(before, after);
  }
  return str;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
