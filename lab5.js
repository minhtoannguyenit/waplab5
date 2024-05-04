// Question 1: using function declaration
function sumArray(arr) {
	return arr.reduce((a, item) => a + (item > 20 ? item : 0), 0);
}

const res1 = sumArray([1,21,22,2,3,4]);
console.log("Answer for Q1:", res1);


// Question 2: unsing function expression
const getNewArray = function (arr) {
	return arr.filter(e => e.length > 5 && e.indexOf('a') != -1);
}

const re2 = getNewArray(['test1', 'aaaaa5', 'abcx666', 'hello a world']);
console.log("Answer for Q2:", re2);

// Question 3: using arrow function
const concatFnc = (a, b, c) => {
	return [...a, ...b, ...c];
}
const res3 = concatFnc('hi', [1,2,3], ['Hello','world']);
console.log("Answer for Q3:", res3);

// Question 4: 
const computeAverageGrade = (students) => {
	const res = {};
	students.filter(st => st.courses.includes('cs303')).map(st => {
		res[st.name] = (st.grades.reduce((a, g) => a + g, 0))/st.grades.length;
	});
	return res;
}
const students = [
  { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
  { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
  { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
];
console.log("Answer for Q4:", computeAverageGrade(students));