function translatePigLatin(str) {
  var regex = /(\w+?)([aeiou]\w+)/i;
    if(/[aeiouAEIOU]/.test(str[0])){
    return str + "way";
  } else {
    return str.replace(regex, '$2$1')+"ay";
  }
}
translatePigLatin("consonant");
