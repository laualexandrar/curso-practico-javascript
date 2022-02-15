const grades = [
    {class:"Math", grade: 10, credit: 2},
    {class:"Philosophy", grade: 8, credit: 5},
    {class:"Gymnastic", grade: 7, credit: 5},
];

const gradesWithCredit = grades.map(function(gradeObject){
    return gradeObject.grade * gradeObject.credit;
})
const sumGradesWithCredit = gradesWithCredit.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);
const credits = grades.map(function(gradeObject){
    return gradeObject.credit;
});
const sumOfCredits = credits.reduce(
    function(sum = 0, newVal){
        return sum + newVal;
    }
)

const weightedArithmeticMean = sumGradesWithCredit/ sumOfCredits;