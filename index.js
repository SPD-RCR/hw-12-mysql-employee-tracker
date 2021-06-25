const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'password',
    database: 'company_DB',

    multipleStatements: true, // Katelin suggested this for  Multiple part Queries
  });


connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });

const runSearch = () => {
    inquirer
        .prompt([
            {
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    { // Required
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                    },
                    // { // Extra Credit
                    //   name: "View All Employees By Department",
                    //   value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                    // },
                    // { // Extra Credit
                    //   name: "View All Employees By Manager",
                    //   value: "VIEW_EMPLOYEES_BY_MANAGER"
                    // },
                    // { // Required
                    //   name: "Add Employee",
                    //   value: "ADD_EMPLOYEE"
                    // },
                    // { // Extra Credit
                    //   name: "Remove Employee",
                    //   value: "REMOVE_EMPLOYEE"
                    // },
                    // {  // Required
                    //   name: "Update Employee Role",
                    //   value: "UPDATE_EMPLOYEE_ROLE"
                    // },
                    // { // Extra Credit
                    //   name: "Update Employee Manager",
                    //   value: "UPDATE_EMPLOYEE_MANAGER"
                    // },
                    { // Required
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                    },
                    { // Required
                      name: "Add Role",
                      value: "ADD_ROLE"
                    },
                    // { //Extra Credit
                    //   name: "Remove Role",
                    //   value: "REMOVE_ROLE"
                    // },
                    { // Required
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                    },
                    { // Required
                      name: "Add Department",
                      value: "ADD_DEPARTMENT"
                    },
                    // { //Extra Credit
                    //   name: "Remove Department",
                    //   value: "REMOVE_DEPARTMENT"
                    // },
                    { // Required
                      name: "Quit",
                      value: "QUIT"
                    }
                ],
            },
        ])
        .then((answer) => {
            switch (answer.action) {
                case 'VIEW_EMPLOYEES':
                    viewEmployees();
                    break;

                // case 'ADD_EMPLOYEE':
                //     addEmployee();
                //     break;
                    
                case 'VIEW_ROLES':
                    viewRoles();
                    break;
                
                case 'ADD_ROLE':
                    addRole();
                    break;
                    
                case 'VIEW_DEPARTMENTS':
                    viewDepartments();
                    break;

                case 'ADD_DEPARTMENT':
                    addDepartment();
                    break;
            
                case 'QUIT':
                    quit();
                    break;
    
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
            }
        });
    };
    
    const viewEmployees = () => {
        console.log('Selecting all employees...\n');
        connection.query('SELECT * FROM company_db.employees', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            runSearch();
        });
    };

    // const addEmployee = async() => {
    //     connection.query('SELECT * FROM company_db.roles', (err, res) => {
    //         if (err) throw err;
    //         // Log all results of the SELECT statement
    //         // console.log(res);
    //         const roles = res.map(row => {
    //             return{value: row.role_id,
    //             name: row.name}
    //         })

    //         inquirer
    //         .prompt([
    //             {
    //             name: 'title',
    //             type: 'input',
    //             message: 'What is the Title of the new role?',
    //             },
    //             {
    //             name: 'salary',
    //             type: 'input',
    //             message: 'What is the Salary of the new role?',
    //             },
    //             {
    //             name: 'dept_id',
    //             type: 'list',
    //             message: 'Which department is the new Role in?',
    //             choices: departments
    //             },
    //         ])
    //         .then((answer) => {
    //             console.log('answer:', answer)
                
    //             // when finished prompting, insert a new item into the db with that info
    //             connection.query(
    //             'INSERT INTO company_db.roles SET ?',
    //             {
    //                 title: answer.title,
    //                 salary: answer.salary,
    //                 dept_id: answer.dept_id
    //             },
    //             (err) => {
    //                 if (err) throw err;
    //                 console.log('The new Role was added successfully!');
    //                 // re-prompt the user for if they want to complete another task
    //                 runSearch();
    //             }
    //             );
    //         });
    //     });
    // };

    const viewRoles = () => {
        console.log('Selecting all roles...\n');
        connection.query('SELECT * FROM company_db.roles', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            runSearch();
        });
    };

    const addRole = async() => {
        connection.query('SELECT * FROM company_db.departments', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            // console.log(res);
            const departments = res.map(row => {
                return{value: row.dept_id,
                name: row.name}
            })

            inquirer
            .prompt([
                {
                name: 'title',
                type: 'input',
                message: 'What is the Title of the new role?',
                },
                {
                name: 'salary',
                type: 'input',
                message: 'What is the Salary of the new role?',
                },
                {
                name: 'dept_id',
                type: 'list',
                message: 'Which department is the new Role in?',
                choices: departments
                },
            ])
            .then((answer) => {
                // console.log('answer:', answer)
                
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                'INSERT INTO company_db.roles SET ?',
                {
                    title: answer.title,
                    salary: answer.salary,
                    dept_id: answer.dept_id
                },
                (err) => {
                    if (err) throw err;
                    console.log('The new Role was added successfully!');
                    // re-prompt the user for if they want to complete another task
                    runSearch();
                }
                );
            });
        });
    };

    const viewDepartments = () => {
        console.log('Selecting all departments...\n');
        connection.query('SELECT * FROM company_db.departments', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            runSearch();
        });
    };

    // function to handle adding a Department
    const addDepartment = () => {
        inquirer
        .prompt([
            {
            name: 'name',
            type: 'input',
            message: 'What is the name of the new department?',
            },
        ])
        .then((answer) => {
            connection.query(
            'INSERT INTO company_db.departments SET ?',
            {
                name: answer.name
            },
            (err) => {
                if (err) throw err;
                console.log('The new Department was added successfully!');
                runSearch();
            }
            );
        });
    };

  const quit = () => {
    console.log('Quitting the Employee Manager application... Goodbye :-)\n');
    connection.end();
  };
