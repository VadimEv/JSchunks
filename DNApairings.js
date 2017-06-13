function pairElement(str) {
  var pairs = { 'G': 'C', 'C': 'G', 'A': 'T', 'T': 'A' };

  return str.split('').map(function(char) {
    return [char, pairs[char]];
  });
}

pairElement("GGC");
