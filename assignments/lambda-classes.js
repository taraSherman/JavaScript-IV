// CODE here for your Lambda Classes
class Person {
    constructor(properties) {
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    }
    speak() {
        return (`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects(favSubjects) {
        return (`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pMProps) {
        super(pMProps);
        this.gradClassName = pMProps.gradClassName;
        this.favInstructor = pMProps.favInstructor;
    }
    standUp(name, channel) {
        return (`${this.name} announces to ${channel}, @channel standby times!​​​​​`);
    }
    debugsCode(name, student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const alfred = new Person({
    name: 'Alfred',
    age: 39,
    location: 'Alabama',
    gender: 'M'
});

const brenda = new Instructor({
    name: 'Brenda',
    age: 29,
    location: 'California',
    gender: 'F',
    specialty: 'redux',
    favLanguage: 'JS',
    catchPhrase: 'DOM'
});

const calvin = new Student({
    name: 'Calvin',
    age: 32,
    location: 'Delaware',
    gender: 'M',
    previousBackground: 'retail',
    className: 'WEBPT4',
    favSubjects: '[JS, DOM, react]'
});

const david = new ProjectManager({
    name: 'David',
    age: 27,
    location: 'Florida',
    gender: 'M',
    gradClassName: 'CS1',
    favInstructor: 'Brenda'
});

console.log(alfred.speak());
console.log(brenda.demo('JS'));
console.log(brenda.grade(calvin, 'JS'));
console.log(calvin.PRAssignment('JS'));
console.log(calvin.sprintChallenge('JS'));
console.log(calvin.listsSubjects());
console.log(david.standUp(david, 'WEBPT4'));
console.log(david.debugsCode(david, calvin, 'JS'));