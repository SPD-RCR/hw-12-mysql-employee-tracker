USE company_db;

INSERT INTO departments (name)
VALUES ("Engineering"), ("Finance"), ("Legal"), ("Sales");

-- USE company_db;
INSERT INTO roles (title, salary, dept_id)
VALUES ("Lead Engineer", 150000, 1), ("Sofware Engineer", 120000, 1), ("Finance Team Lead", 170000, 2), ("Accountant", 125000, 2), ("Legal Team Lead", 250000, 3), ("Lawyer", 190000, 3), ("Sales Lead", 100000, 4), ("Salesperson", 80000, 4);

-- USE company_db;
INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
VALUES ("Ashley", "Rodriguez", null, 1, 1), ("Malia", "Brown", null, 4, 2), ("Sarah", "Lourd", null, 5, 3), ("John", "Doe", 1, 7, 4), ("Kevin", "Tupik", 1, 2, 1), ("Tom", "Allen", 3, 6, 3), ("Mike", "Chan", 4, 8, 4), ("Tammer", "Galal", 5, 2, 1), ("Christian", "Eckenrode", 7, 1, 1);

-- Based on my original Insert all employees query: 
-- - Separated employees by manager_id.
-- - Rearranged null level manager_id to match their dept_id order.
-- - Rearranged employees by manager level. 
-- - Assigned new manager_id by new emp_id.
-- - Ran separate Insert for each managment level.
-- - Finally merged all employees into a single Insert but using the same employee order from top to bottom.

-- -- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("Ashley", "Rodriguez", null, 1, 1), ("Malia", "Brown", null, 4, 2), ("Sarah", "Lourd", null, 5, 3);

-- -- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("John", "Doe", 1, 7, 4), ("Kevin", "Tupik", 1, 2, 1), ("Tom", "Allen", 3, 6, 3);

-- -- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("Mike", "Chan", 4, 8, 4), ("Tammer", "Galal", 5, 2, 1);

-- -- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("Christian", "Eckenrode", 7, 1, 1);

-- Original employees Insert didn't work because the manager_id values did not match up with the emp_id, because they had not been inserted yet due to the order the employees were listed in this query
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("John", "Doe", 3, 7, 4), ("Mike", "Chan", 1, 8, 4), ("Ashley", "Rodriguez", null, 1, 1), ("Kevin", "Tupik", 3, 2, 1), ("Malia", "Brown", null, 4, 2), ("Sarah", "Lourd", null, 5, 3), ("Tom", "Allen", 6, 6, 3), ("Christian", "Eckenrode", 2, 1, 1), ("Tammer", "Galal", 4, 2, 1);