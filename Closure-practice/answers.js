// https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304

// 1
// module pattern allows us to emulate the functionality of other languages that allows them to create private functions
// by using closure we are able to keep the salary and changeby method private the the salary function and preventing naming collisions

var mySalary = (function() {
	let salary = 60000;
	function changeBy(amount) {
		salary += amount;
    }
	return {
        raise: function() {
			changeBy(5000);
        },
		lower: function() {
			changeBy(-5000);
        },
		currentAmount: function() {
			return salary;
        }
    }
})();

//2
function myJob(duty) {
	return function where(location) {
		return `I worked as a ${duty} in ${location}`
    }
}








