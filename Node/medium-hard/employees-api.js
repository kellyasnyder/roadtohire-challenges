// MEDIUM: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

//npm init
const fs = require('fs');
const express = require('express'); //npm install --save express
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express();

app.use(bodyParser.json());

const employees = JSON.parse(fs.readFileSync('./employees.json', 'utf-8'));

//get all employees
app.get('/employees', (req, res) => {
    res.send(employees);
})

//get from employee id
app.get('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            res.send(employees[i]);
        } 
    }

    res.status(404).send('Unable to find ID');
})

// HARD: Add the remaining CRUD functionality to your medium problem.
// Make sure you return the proper HTTP status codes based on the outcome of the request. Be sure to implement error checking here.
// If an invalid request is made, we want to return some sort of error message and the correct HTTP status code for the situation.

//create new employee
app.post('/employees', (req, res) => {
    const {id, name, salary, department} = req.body;
    if (id && name && salary && department) {
        const newEmployee = {
            id,
            name,
            salary,
            department
        }
        employees.push(newEmployee);
        fs.writeFileSync('./employees.json', JSON.stringify(employees));
        res.send(newEmployee);
    } else {
        res.status(422).send('Unable to add employee');
    }
})

//delete certain employee
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filteredEmployees = employees.filter(employee => employee.id !== id);
    if (filteredEmployees.length === employees.length) {
        return res.status(404).send('Unable to find ID');
    }
    fs.writeFileSync('./employees.json', JSON.stringify(filteredEmployees));
    res.send(filteredEmployees);
})

//update existing employee
app.put('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {id, name, salary, department} = req.body;
    for (let i = 0; i < employees.length; i++) {
        if (id) {
            employees[i].id = id;
        }
        if (name) {
            employees[i].name = name;
        }
        if (salary) {
            employees[i].salary = salary;
        }
        if (department) {
            employees[i].department = department;
        }
    }
    fs.writeFileSync('./employees.json', JSON.stringify(filteredEmployees));
    res.send(employees[i]);
})

app.listen(3000);