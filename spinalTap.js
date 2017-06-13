
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(/[^A-Za-z]+/g,'-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
