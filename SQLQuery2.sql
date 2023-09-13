CREATE DATABASE phase2;
GO

USE phase2;
GO

/* Created employee table
	TASK 2 And 3
*/ 

CREATE TABLE employee ( employeeId VARCHAR(30) PRIMARY KEY,
						employeeFirstName VARCHAR(30),
						employeeLastName VARCHAR(30),
						dateofBirth DATE, 
						age INT,
						sex VARCHAR(10),
						designation VARCHAR(30),
						workLocation VARCHAR(30),
						departmentId VARCHAR(30),
						salary INT);

GO

/* Populated employee table*/

INSERT INTO employee VALUES('E001', 'Aston', 'James', '1990-07-09', 32,'Male', 'Project Manager','Kochi', 'D001', 50000);
INSERT INTO employee VALUES('E002', 'Erik', 'Jhon', '1980-08-26', 43,'Male', 'Delivery Manager','Thrissur', 'D002', 150000);
INSERT INTO employee VALUES('E003', 'Rose', 'Warner', '1989-02-01', 34,'Female', 'Sr Developer','Coimbatore', 'D003', 80000);
INSERT INTO employee VALUES('E004', 'Gordon', 'Ramsey', '1983-09-27', 40,'Male', 'Associate Developer','Chennai', 'D003', 60000);
INSERT INTO employee VALUES('E005', 'Susan', 'Wilson', '1992-09-16', 31,'Female', 'Software Developer','Banglore', 'D002', 60000);
INSERT INTO employee VALUES('E006', 'Dominic', 'Miller', '1989-08-02', 34,'Male', 'Software Developer','Goa', 'D003', 55000);
INSERT INTO employee VALUES('E007', 'Lexi', 'Robert', '1985-07-12', 38,'Female', 'Project Manager','Hydrebad', 'D001', 118000);
INSERT INTO employee VALUES('E008', 'Arjun', 'Reddy', '1993-09-03', 29,'Male', 'Project Manager','Delhi', 'D001', 110000);
INSERT INTO employee VALUES('E009', 'Robert', 'Downey', '1994-09-06', 29,'Male', 'Trainee','Mumbai', 'D003', 58000);
INSERT INTO employee VALUES('E010', 'Chris', 'Rock', '1986-07-29', 37,'Male', 'HR Manager','Kochi', 'D002', 150000);
INSERT INTO employee VALUES('E011', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Backend Dev','Banglore', 'D002', 150000);

SELECT*FROM employee; --select whole table

UPDATE employee			--update the location of empid E010 to Banglore
SET workLocation = 'Banglore'
WHERE employeeId = 'E010';
INSERT INTO employee VALUES('E012', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Backend Dev','Banglore', 'D002', 150000);


/*Using diffrent variation of select method*/


SELECT employeeId AS EmployeeId ,employeeFirstName AS Firstname FROM employee WHERE departmentId = 'D002'; --select empid and empfirstname with depid D002
SELECT employeeId,employeeFirstName FROM employee WHERE designation = 'Project Manager';
SELECT * FROM employee where sex = 'Male';
SELECT * FROM employee WHERE employeeFirstName LIKE 'C%';

/*Delete Operation*/

DELETE FROM employee WHERE employeeId = 'E012'; --deleted Employee row with empid E012

INSERT INTO employee VALUES('E012', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Accounting','Banglore', 'D004', 150000);

SELECT MAX(salary) AS Salary FROM employee WHERE salary < (SELECT MAX(salary) FROM employee); --select the second largest salary
 
SELECT departmentId AS Employees, COUNT(*) as Count FROM employee GROUP BY departmentId; --List the number of employees in each department. 


/*Created department table*/

CREATE TABLE department	( departmentId VARCHAR(30) PRIMARY KEY, --created department table
						  departmentName VARCHAR(30));

INSERT INTO department VALUES('D001','Project'); --inserted values to department table
INSERT INTO department VALUES('D002','IT');
INSERT INTO department VALUES('D003','BANKING');

select * from department;


SELECT employee.employeeFirstName,employee.employeeLastName, department.departmentName FROM employee INNER JOIN department ON employee.departmentId = department.departmentId; --did innerjoin

SELECT employee.employeeFirstName,employee.employeeLastName, department.departmentName FROM employee LEFT JOIN department ON employee.departmentId = department.departmentId; --did leftjoin

SELECT employee.employeeFirstName,employee.employeeLastName, department.departmentName FROM employee RIGHT JOIN department ON employee.departmentId = department.departmentId; --did rightjoin

SELECT employee.employeeFirstName,employee.employeeLastName, department.departmentName FROM employee FULL OUTER JOIN department ON employee.departmentId = department.departmentId; --did full outer join


ALTER TABLE employee            --Added Foreign Key to employee as departmentId
ADD FOREIGN KEY (departmentId)
REFERENCES department(departmentId);

/*  To implement diffrent CRUD [CREATE] operation */

CREATE PROCEDURE createEntityDepartment @departmentId VARCHAR(30), @departmentName VARCHAR(30) --Add procedure to insert into department table	
AS
INSERT INTO department(departmentId,departmentName) VALUES(@departmentId,@departmentName);
GO

EXEC createEntityDepartment @departmentId = 'D004', @departmentName = 'Training';

/* To implement diffrent CRUD [READ] operation */


CREATE PROCEDURE selectAllEmployeeDetails -- To select all the employees
AS
SELECT * FROM employee;
GO

EXEC selectAllEmployeeDetails;

CREATE PROCEDURE selectEmployeefromcity @location varchar(30) --To select employes based on location
AS
SELECT * from employee where worklocation = @location FROM employee;
GO

EXEC selectEmployeefromcity @location = 'Banglore';

CREATE PROCEDURE selectEmployeefromemployeeId @empId varchar(30) --To select employee based on empid
AS
SELECT * FROM employee WHERE employeeId = @empId;
GO
EXEC selectEmployeefromemployeeId @empId = 'E001';

CREATE PROCEDURE getNameFromId @nameId varchar(30) --To get Employee name from empid
AS
SELECT employeeFirstName,employeeLastName FROM employee WHERE employeeID = @nameId;
GO
EXEC getNameFromId @nameId = 'E001';

CREATE PROCEDURE getDetailsFromDesignationLocation @designation varchar(30),@location varchar(30) --To get details of employe based on location and designation
AS
SELECT * FROM employee WHERE designation = @designation AND workLocation = @location;
GO
EXEC getDetailsFromDesignationLocation @designation = 'Project Manager',@location = 'Kochi';



/*  To implement diffrent CRUD [UPDATE] operation */

CREATE PROCEDURE updateEmployeeLocation @employeeId varchar(30), @workLocation varchar(30)
AS

	UPDATE employee
	SET workLocation = @workLocation
	WHERE employeeId = @employeeId

GO


/* To implement diffrent CRUD [UPDATE] operation */

CREATE PROCEDURE deleteEmployee @employeeId VARCHAR(30)
AS
DELETE FROM employee WHERE employeeId = @employeeId;
GO


/* Single Stored Procedure */

CREATE TABLE STUDENT (studentId VARCHAR(30),firstName VARCHAR(30), lastName VARCHAR(30));
GO

INSERT INTO STUDENT VALUES ('S001','Ram','Kumar');
INSERT INTO STUDENT VALUES ('S002','Joseph','Antony');
INSERT INTO STUDENT VALUES ('S003','Alexa','Prime');
INSERT INTO STUDENT VALUES ('S004','Cortana','Baker');


CREATE PROCEDURE studentCRUD 
@operation varchar (30),
@studentID varchar (30),
@firstName varchar(30) = NULL,
@lastName varchar (30) = NULL
AS

BEGIN
	IF @operation = 'Create'
	BEGIN
		INSERT INTO STUDENT(studentId,firstName, lastName) VALUES(@studentID,@firstName,@lastName);
	END

	IF @operation = 'Read'
	BEGIN
		SELECT*FROM STUDENT WHERE studentId = @studentId;
	END
	IF @operation = 'Update'
	BEGIN
		UPDATE STUDENT
		SET firstName = @firstName, lastName = @lastName
		WHERE studentId = @studentId;
	END
	IF @operation = 'Delete'
	BEGIN
		DELETE FROM STUDENT 
		WHERE studentId = @studentId;
	END
END

EXEC studentCRUD @operation = 'Read',@studentID = 'S001'; --Execution
