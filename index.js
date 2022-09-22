const inquirer = require("inquirer");
require("console.table");
const db = require('./db')

const mainMenu = {
    type: "list",
    message: "What do you want to do?",
    name: "action",
    choices: [
        "View Roles",
        "View Departments",
        "View Employees",
        "Add a Role",
        "Add a Department",
        "Add an Employee",
        "Update an existing role",
        "exit",
    ],
}

const roleMenu = [
    {
        type: "input",
        message: "What is the Role?",
        name: "role",
    },
    {
        type: "input",
        message: "What is the Salery for this Role?",
        name: "salary",
    },
    {
        type: "input",
        message: "In what Department does this Role go?",
        name: "department",
    }
]

const departmentMenu = {
    type: "input",
    message: "What department would you like to Add?",
    name: "newDepartment",
}

const employeeMenu = [
    {
        type: "input",
        message: "Employee First Name?",
        name: "firstName",
    },
    {
        type: "input",
        message: "Employee Last Name?",
        name: "lastName",
    },
    {
        type: "input",
        message: "Employee Role?",
        name: "role",
    },
    {
        type: "input",
        message: "Employee Manager?",
        name: "manager",
    }
]

const updateEmp = [
    {
        type: "input",
        message: "Choose an Employee",
        name: "updateEmployee",
    },
    {
        type: "input",
        message: "Choose a new role for Employee",
        name: "updateRole",
    },
]

// const updateRole = [

// ]

function menu()
{
    inquirer.prompt(mainMenu).then((answer) => {
        switch (answer.action){
            case "View Roles":
                viewRoles()
                break;
            case "View Departments":
                viewDepartment()
                break;
            case "View Employees":
                viewEmployees()
                break;
            case "Add a Role":
                inquirer.prompt(roleMenu).then((answers) => {
                    //code to add to database
                    menu()
                })
                break;
            case "Add a Department":
                inquirer.prompt(departmentMenu).then((answers) => {
                    //code to add to database
                    menu()
                })
                break;
            case "Add an Employee":
                inquirer.prompt(employeeMenu).then((answers) => {
                    //code to add to database
                    menu()
                })
                break;
                default: process.exit();
        }
    })
}

menu()