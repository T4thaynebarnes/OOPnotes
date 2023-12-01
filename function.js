// ***** STEP 1 ****
// to create a class you do the following: follow pascale naming case instead of camelcase. 
// / first word is capitalized in all, inside { } build constructor. use "constructor ()" keyword.
// this is a constructor method below, it is respresenting an instance of a class


// class Student {
//     constructor(){
//         this.firstName ="sam";
//         this.lastName ="Smith";
//         this.phoneNumber = '4805555555';
//         this.grade = 'A';
//     }
// }

// ***Step 2 ****
// add parameters inside () of constructor, this will allow for data to be called upon, 
// set variables as paramenters.
// assing variables equal to themselves which is
//  whatever comes in from the argument that is passed.
// this. is used to specify the field that belongs to that instance

//****** */ notice "class" is used as keyword to create class and "new" is used to log 
// them out below this is called instantiation. ( the creation of an object)

class Student {
    constructor(firstName, lastName, phoneNumber, grade ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
    // adding functionality below, by using "introduce()" keyword
    introduce(){
        // logging to console, using template literals below
        console.log("class example 1: ");
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
        
    }
}
// creating instances of this class above, passing values thru a constructor below. 
// **note "Student" class  instantiated (called) whatever code was in "class Student {}" above

let student1 = new Student('Tom', 'Sawyer', '2083806749', 'A' );
//****** */ notice "class" is used as keyword to create class and "new" is used to log 
// them out below this is called instantiation. ( the creation of an object)

let student2 = new Student ('sara', 'smith', '2083806749', 'A');

// calling it like you would a normal function, but using . notation method below
student1.introduce();
student2.introduce();


// *************** example of another class******
class Animal {
    constructor(name, type, weight, height, location) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.location = location;


    }
//   inside the curly brace of "class Animal {}"  "describe" key word is same as introduced
   describe() {
    console.log("            ");
    console.log("class example 2: ");
    console.log("Animal Description");
    console.log("\tName: " + this.name);
    console.log("\tType: "+ this.type);
    console.log("\tWeight: "+ this.weight);
    console.log("\tHeight: "+ this.height);
    console.log("\tLocation: "+ this.location);
   }
}
// instantiating class instance below
let elephant = new Animal("Dumbo", "elephant", 8000, 108,"Disneyland");
elephant.describe();
// prints details to console 

class Person {
    constructor(name, age) {
        this.name=name;
        this.age = age;

    }
    hello() {
        console.log(`hello my name is ${this.name}`);
    }
}



// ***********************************************************

// **** inheritance *****
// PromotionSender and CollectionSender are child classes and Notification is the
//  parent class that they inherit two of the common methods uncmmited in green below
// this prints out Sending: This is a test! do not respond you owe nothing. I WANT NOTHING!!!!!! 
class NotificationSender{
    constructor(status) {
        this.status = status;
    }
    // these are being inhertited by super method to other classes above
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
}
}


class PromotionSender extends NotificationSender {
    constructor(status){
        // super is a way to call common methods from parent class
        super(status);

    }
    // These below are methods being placed, 
    // which are the properties refered to earlier.

    // Notice below two of the properties or methods 
    // are the same in both classes below? 
// ************************************************************
    // sendNotification(notification){
    //     console.log('Sending: ' + notification);
    // }
    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }
    // *****************************************************************
    //  if statement for logic to give status discounts
    calculateDiscount(status){
      if (status === 'GOLD') {
        return .3;
      } else if(status === 'SILVER'){
        return .15;
      }
      return 0;
    }
}
// class 2 ***
class CollectionSender extends NotificationSender {
    // instead of coding below methods in each, 
    constructor(status){
     super(status);
    }
    // *****************************************************************
    // sendNotification(notification){
    //     console.log("Sending: " + notification);
    // }
    

    // // adding methods to class
    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }

    // *****************************************************************

    // fee calcualtation method or property
    calculateFee(status) {
        if (status == "OVERDUE"){
            return 10;
        } else if (status === "DELIQUENT") {
            return 25;
        }
        return 5;
    }
 }   

//  
 let collectionSender = new CollectionSender("OVERDUE");
 collectionSender.sendNotification('This is a test! do not respond you owe nothing. I WANT NOTHING!!!!!!');





//  ************************coding challenge ****************************
// Use the keyword extends to inherit properties and methods from a different class.  
//  In the following example, the first class created is Person and then the Teacher 
//  class is created using extends Person

// Here is an example:
// Modify this simple example to add additional properties 
// to the Person class, and then use those properties within the Teacher class.


class Person {
    constructor (newName) {
    this.name = newName;
    }
    introduce() {
    return `My name is ${this.name}.`;
    }
    }
    class Teacher extends Person {
    constructor (name, courseName) {
    super(name);
    this.courseName = courseName;
    }
    introduceSelf() {
    console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class.`);
    }
    }
    let teacher = new Teacher('Ms. Angle', 'Trigonometry');
    console.log(teacher.introduce());
    teacher.introduceSelf();
// Other things to note is the use of Template Literals in the introduce() method 
// in Person, and also in the introduceSelf() method in Teacher.
//  Notice that both of those are able to be called on the variable teacher.


