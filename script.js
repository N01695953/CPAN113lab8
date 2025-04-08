//Part 1: Understanding and Creating Objects
let Student = {
    studentName: "Fariah Yusuf",
    studentAge: 21,
    enrolled: true,
    courses: ["Java", "Html", "Javascript", "SQL", "CSS"],
    displayInfo : function() {
        return `studentName: ${this.studentName}, studentAge: ${this.studentAge}`
    }
};

console.log(Student.studentName)
console.log(Student.studentAge)
console.log(Student.displayInfo())

//Part 2: Working with JSON
//Convert the student object into a JSON string.
let StudentJSON = JSON.stringify(Student);
console.log(StudentJSON);

//Convert the JSON string back into a JavaScript object.
let newStudent = JSON.parse(StudentJSON);
console.log(newStudent);

//compare it to the original.
console.log(newStudent === Student);

//Part 3: Using Destructuring Assignment
let {studentName , courses} = Student;
console.log(studentName);
console.log(courses);

let scores = [85, 92, 78, 90];
let [firstScores, secondScores] = scores
console.log(firstScores, secondScores);

//Part 4: The Spread Operator
let clonedStudent = {...Student, graduationYear: 2026}
console.log(clonedStudent)

let newCourses = ["Art", "English"]
let allCourses = [...Student.courses, ...newCourses];
console.log(allCourses)

//Part 5: Object Methods
Student.addCourse = function(course){
    this.courses.push(course);
}
Student.getTotalCourses = function() {
    return this.courses.length;
}

Student.addCourse("Computer Science");
console.log(Student.getTotalCourses());

//Bonus Task
let averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(averageScore);