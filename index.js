var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.name = function () {
        return "My name is " + this.firstName + " " + this.lastName + " i am " + this.age + " years old and i work as a " + this.jobTitle;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Student.prototype.testT = function () {
        return this.name() + " and i get " + this.salary + " and i work in " + this.jobLocation;
    };
    return Student;
}(Person));
var fullName = new Student("Peter", "Griffin", "30", "comedian", "3000$", "America");
console.log(fullName.testT());
