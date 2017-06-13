
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
var obj = null;
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i]["firstName"] === firstName){
    obj = contacts[i];
    break;
  }
}  
  if (obj === null){
    return "No such contact";
  }
  if (obj.hasOwnProperty(prop) === true ){
    return obj[prop];
  } else {
    return "No such property";
 }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Harry", "likes");
