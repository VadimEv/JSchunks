/*Return a new array that transforms the element's average altitude into their orbital periods. */

function orbitalPeriod(arr) {
  var GM = 398600.4418; // Earth's Gm value in km^3/s^2
  var earthRadius = 6367.4447; // Eath's raius in kilometers
  // we consider the orbiting elemnt mass is Negligibly small compared to Earth
  function getOrbitalperiod(averageAltitude, earthRadius, GM){
    return Math.round(Math.PI * 2 * Math.sqrt(Math.pow(averageAltitude+earthRadius,3)/GM));
  }
  return arr.map(function(elem){
    return {
      name: elem.name,
      orbitalPeriod: getOrbitalperiod(elem.avgAlt, earthRadius, GM)
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
