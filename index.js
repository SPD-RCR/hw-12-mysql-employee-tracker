const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

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
      .prompt({
        name: 'action',
        type: 'rawlist',
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
            { // Required
              name: "Add Employee",
              value: "ADD_EMPLOYEE"
            },
            // { // Extra Credit
            //   name: "Remove Employee",
            //   value: "REMOVE_EMPLOYEE"
            // },
            {  // Required
              name: "Update Employee Role",
              value: "UPDATE_EMPLOYEE_ROLE"
            },
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
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Find songs by artist':
            artistSearch();
            break;
  
          case 'Find all artists who appear more than once':
            multiSearch();
            break;
  
          case 'Find data within a specific range':
            rangeSearch();
            break;
  
          case 'Search for a specific song':
            songSearch();
            break;
  
          case 'Find artists with a top song and top album in the same year':
            songAndAlbumSearch();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  
  const artistSearch = () => {
    inquirer
      .prompt({
        name: 'artist',
        type: 'input',
        message: 'What artist would you like to search for?',
      })
      .then((answer) => {
        const query = 'SELECT position, song, year FROM top5000 WHERE ?';
        connection.query(query, { artist: answer.artist }, (err, res) => {
          res.forEach(({ position, song, year }) => {
            console.log(
              `Position: ${position} || Song: ${song} || Year: ${year}`
            );
          });
          runSearch();
        });
      });
  };
  