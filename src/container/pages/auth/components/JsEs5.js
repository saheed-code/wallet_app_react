function Person(firstName, lastName, dateOfBirth){
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
}

Person.prototype.greeting = function (firstName, lastName) {
    return `Hello ${firstName} ${lastName} nice to meet you todat dated ${Date.now()}`
}

Person.prototype.getAge = function () {
    var birthday = +new Date(this.dateOfBirth);
    return ~~((Date.now() - birthday) / (31557600000)); 
}

function PersonTwo (firstName, lastName, age, dateOfBirth, sex, height) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.dateOfBirth = dateOfBirth
    this.sex = sex
    this.height = height
}

PersonTwo.prototype.getAge = Object.create(Person)

const pTwo = new PersonTwo()

console.log();