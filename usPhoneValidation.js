
function telephoneCheck(str) {
  // Good luck!
//  var myRegex = /^([+]1)?(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
//  var myRegex = /^([+]1)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/;
//  var myRegex = /\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/;
// var myRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/
//  var myRegex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/
//  var myRegex = /^(+?1?)\s*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  var myRegex = /^1? ? (\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
  return myRegex.test(str);
}

telephoneCheck("555-555-5555") >> a boolean.
telephoneCheck("1 555-555-5555") >> true.
telephoneCheck("1 (555) 555-5555") >> true.
telephoneCheck("5555555555") >> true.
telephoneCheck("555-555-5555") >> true.
telephoneCheck("(555)555-5555") >> true.
telephoneCheck("1(555)555-5555") >> true.
telephoneCheck("555-5555") >> false.
telephoneCheck("5555555") >> false.
telephoneCheck("1 555)555-5555") >> false.
telephoneCheck("1 555 555 5555") >> true.
telephoneCheck("1 456 789 4444") >> true.
telephoneCheck("123**&!!asdf#") >> false.
telephoneCheck("55555555") >> false.
telephoneCheck("(6505552368)") >> false
telephoneCheck("2 (757) 622-7382") >> false.
telephoneCheck("0 (757) 622-7382") >> false.
telephoneCheck("-1 (757) 622-7382") >> false
telephoneCheck("2 757 622-7382") >> false.
telephoneCheck("10 (757) 622-7382") >> false.
telephoneCheck("27576227382") >> false.
telephoneCheck("(275)76227382") >> false.
telephoneCheck("2(757)6227382") >> false.
telephoneCheck("2(757)622-7382") >> false.
telephoneCheck("555)-555-5555") >> false.
telephoneCheck("(555-555-5555") >> false.
telephoneCheck("(555)5(55?)-5555") >> false.
