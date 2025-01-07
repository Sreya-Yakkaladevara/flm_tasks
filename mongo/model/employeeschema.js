const mongoose = require('mongoose');

const employeeschema = {
    "name":"String",
    "age" : "Number",
    "salary" : "Number",
    "emp_id" : "Number"
}
const employeemodel = mongoose.model("employee",employeeschema);

module.exports = {
    employeemodel
}