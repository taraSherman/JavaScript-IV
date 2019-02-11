// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects(favoriteSubjects) {
        console.log(`${favoriteSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pMProps) {
        super(pMProps);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}

const alfred = new Person(
    name: 'Alfred',
    age: 39,
    location: 'Alabama',
    gender: 'M'
)

const brenda = Instructor(
    name: 'Brenda',
    age: 29,
    location: 'California',
    gender: 'F'
)

const calvin = Student(
    name: 'Calvin',
    age: 32,
    location: 'Delaware',
    gender: 'M'
)

const david = ProjectManager(
    name: 'David',
    age: 27,
    location: 'Florida',
    gender: 'M'
)

speak(calvin);