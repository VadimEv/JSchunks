function sumFibs(num) {
  var i1 = 0;
  var i2 = 1;
  var i3 = 0;
  var sigma = 0;
  while (i2 <= num){
    sigma += i2 & 1 ? i2 : 0; //bits operator vorwking for numerics ==1 means odd, else mean even
    i3 = i2 + i1;
    i1 = i2;
    i2 = i3;
  }
  return sigma;
}
sumFibs(4);
