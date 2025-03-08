function gradeGenerator() {
    const marks = parseFloat(prompt("Enter student marks (0-100):"))
    if (isNaN(marks)  || marks < 0 || marks > 100) {
        console.log("invalid input! Marks should be between 0 and 100");
        return;
    }
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`Grade: ${grade}`);
}
