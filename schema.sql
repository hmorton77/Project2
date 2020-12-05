drop database if exists tracked_employees; 
create database tracked_employees;
use tracked_employees;
INSERT INTO employees (firstName, lastName, quarantineStart, quarantineEnd, covidConfirmed, currentCondition, activeStatus, createdAt, updatedAt) VALUES ('John', 'Doe', '09/07/2020', '09/21/2020', '09/08/2020', 'quarantining', true, '09/06/2020', '09/08/2020');
