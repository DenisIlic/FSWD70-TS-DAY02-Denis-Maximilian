class Person { 
   firstName = ""; 
   lastName = "";
   age;
   jobTitle = "";
constructor(firstName, lastName, age, jobTitle){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.jobTitle = jobTitle
}
name() {
	return `My name is ${this.firstName} ${this.lastName} i am ${this.age} years old and i work as a ${this.jobTitle}`;
}

}

class Student extends Person {
	salary;
	jobLocation;
	constructor(firstName, lastName, age, jobTitle, salary, jobLocation){
		super(firstName, lastName, age, jobTitle,);
		this.salary = salary;
		this.jobLocation = jobLocation;
}

testT(){
	return `${this.name()} and i get ${this.salary} and i work in ${this.jobLocation}`;
}

}

let fullName = new Student ("Peter", "Griffin", "30", "comedian", "3000$", "America" );
console.log(fullName.testT());







