var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
   var fullName = firstAndLast;
   var arr = firstAndLast.split(' ');
    this.getFullName = function() {
      return fullName;
    };
    //return firstAndLast;
    this.getLastName = function() {
      var last = this.lastName || (function(){
        return arr[1];
      })();
      return last;
    };
    this.getFirstName = function() {
      var first = this.firstName ||(function(){
        return arr[0];
      })();
      return first;
    };
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
      arr = fullName.split(' ');
    };
    this.setLastName = function(last){
      arr[1] = last;
      fullName = arr.join(' ');
    };
    this.setFirstName = function(first) {
      arr[0] = first;
      fullName = arr.join(' ');
    };
};

var bob = new Person('Bob Ross');

bob.getFirstName();
