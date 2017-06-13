
function convertHTML(str) {
  // &colon;&rpar;
  // wrong output by I love regex
  //var newStr = str.replace(/[\W_]+/g,function(e){return" &#"+e.charCodeAt(0)+"; ";});
  //boring dictionary-like way
  function convert(str)
  {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    return str;
  }
  var newStr = str.replace(/[\W_]+/g,convert);
  return newStr;
}

convertHTML("Dolce & Gabbana");
