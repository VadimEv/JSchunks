
function titleCase(str) {
  var lower = str.toLowerCase();
  return lower.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
}

titleCase("I'm a little tea pot");
