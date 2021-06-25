DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

SET FOREIGN_KEY_CHECKS = 0; -- Santiago suggested this and remove ON DELETE SET NULL ON UPDATE SET NULL from create table Foreign Keys to avoid Foreign Key Constraints

SET SQL_SAFE_UPDATES = 0;

USE company_db;

CREATE TABLE departments (
dept_id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
role_id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NULL,
salary DECIMAL NULL,
dept_id INT NULL,
FOREIGN KEY (dept_id) REFERENCES departments(dept_id),
-- ON DELETE SET NULL ON UPDATE SET NULL,
PRIMARY KEY (role_id)
);

CREATE TABLE employees (
emp_id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
manager_id INT null,
FOREIGN KEY (manager_id) REFERENCES employees(emp_id),
-- ON DELETE SET NULL ON UPDATE SET NULL,
role_id INT NULL,
FOREIGN KEY (role_id) REFERENCES roles(role_id),
-- ON DELETE SET NULL ON UPDATE SET NULL,
dept_id INT NULL,
FOREIGN KEY (dept_id) REFERENCES departments(dept_id),
-- ON DELETE SET NULL ON UPDATE SET NULL,
PRIMARY KEY (emp_id)
);

-- USE company_db;
-- INSERT INTO departments (name)
-- VALUES ("Engineering"), ("Finance"), ("Legal"), ("Sales");

-- -- USE company_db;
-- INSERT INTO roles (title, salary, dept_id)
-- VALUES ("Lead Engineer", 150000, 1), ("Sofware Engineer", 120000, 1), ("Finance Team Lead", 170000, 2), ("Accountant", 125000, 2), ("Legal Team Lead", 250000, 3), ("Lawyer", 190000, 3), ("Sales Lead", 100000, 4), ("Salesperson", 80000, 4);

-- -- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("Ashley", "Rodriguez", null, 1, 1), ("Malia", "Brown", null, 4, 2), ("Sarah", "Lourd", null, 5, 3), ("John", "Doe", 1, 7, 4), ("Kevin", "Tupik", 1, 2, 1), ("Tom", "Allen", 3, 6, 3), ("Mike", "Chan", 4, 8, 4), ("Tammer", "Galal", 5, 2, 1), ("Christian", "Eckenrode", 7, 1, 1);




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

-- USE company_db;
-- INSERT INTO employees (first_name, last_name, manager_id, role_id, dept_id)
-- VALUES ("John", "Doe", 3, 7, 4), ("Mike", "Chan", 1, 8, 4), ("Ashley", "Rodriguez", null, 1, 1), ("Kevin", "Tupik", 3, 2, 1), ("Malia", "Brown", null, 4, 2), ("Sarah", "Lourd", null, 5, 3), ("Tom", "Allen", 6, 6, 3), ("Christian", "Eckenrode", 2, 1, 1), ("Tammer", "Galal", 4, 2, 1);
