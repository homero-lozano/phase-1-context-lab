/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

const createEmployeeRecords = function (arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateTimeString) {
    let [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
};

const createTimeOutEvent = function (dateTimeString) {
    let [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
};

const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find(e => e.date === date);
    const timeOutEvent = this.timeOutEvents.find(e => e.date === date);

    if (!timeInEvent || !timeOutEvent) return 0;

    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
};

const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};

 

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
const findEmployeeByFirstName = function (collection, firstName) {
    return collection.find(employee => employee.firstName === firstName);
};

const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce((memo, record) => {
        return memo + allWagesFor.call(record);
    }, 0);
};
