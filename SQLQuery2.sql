CREATE DATABASE phasetwo;
GO

USE phasetwo;
GO

/* Created employee table
	TASK 2 And 3
*/ 

CREATE TABLE tblEmployees ( employeeId VARCHAR(30) PRIMARY KEY,
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

INSERT INTO tblEmployees VALUES('E001', 'Aston', 'James', '1990-07-09', 32,'Male', 'Project Manager','Kochi', 'D001', 50000);
INSERT INTO tblEmployees VALUES('E002', 'Erik', 'Jhon', '1980-08-26', 43,'Male', 'Delivery Manager','Thrissur', 'D002', 150000);
INSERT INTO tblEmployees VALUES('E003', 'Rose', 'Warner', '1989-02-01', 34,'Female', 'Sr Developer','Coimbatore', 'D003', 80000);
INSERT INTO tblEmployees VALUES('E004', 'Gordon', 'Ramsey', '1983-09-27', 40,'Male', 'Associate Developer','Chennai', 'D003', 60000);
INSERT INTO tblEmployees VALUES('E005', 'Susan', 'Wilson', '1992-09-16', 31,'Female', 'Software Developer','Banglore', 'D002', 60000);
INSERT INTO tblEmployees VALUES('E006', 'Dominic', 'Miller', '1989-08-02', 34,'Male', 'Software Developer','Goa', 'D003', 55000);
INSERT INTO tblEmployees VALUES('E007', 'Lexi', 'Robert', '1985-07-12', 38,'Female', 'Project Manager','Hydrebad', 'D001', 118000);
INSERT INTO tblEmployees VALUES('E008', 'Arjun', 'Reddy', '1993-09-03', 29,'Male', 'Project Manager','Delhi', 'D001', 110000);
INSERT INTO tblEmployees VALUES('E009', 'Robert', 'Downey', '1994-09-06', 29,'Male', 'Trainee','Mumbai', 'D003', 58000);
INSERT INTO tblEmployees VALUES('E010', 'Chris', 'Rock', '1986-07-29', 37,'Male', 'HR Manager','Kochi', 'D002', 150000);
INSERT INTO tblEmployees VALUES('E011', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Backend Dev','Banglore', 'D002', 150000);

SELECT*FROM tblEmployees; --select whole table

UPDATE tblEmployees			--update the location of empid E010 to Banglore
SET workLocation = 'Banglore'
WHERE employeeId = 'E010';
INSERT INTO tblEmployees VALUES('E012', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Backend Dev','Banglore', 'D002', 118000);


/*Using diffrent variation of select method*/


SELECT employeeId AS EmployeeId ,employeeFirstName AS Firstname FROM tblEmployees WHERE departmentId = 'D002'; --select empid and empfirstname with depid D002
SELECT employeeId,employeeFirstName FROM tblEmployees WHERE designation = 'Project Manager';
SELECT * FROM tblEmployees where sex = 'Male';
SELECT * FROM tblEmployees WHERE employeeFirstName LIKE 'C%';

/*Delete Operation*/

DELETE FROM tblEmployees WHERE employeeId = 'E012'; --deleted Employee row with empid E012

INSERT INTO tblEmployees VALUES('E011', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Accounting','Banglore', 'D004', 150000);

/*Select 2nd Largest Salary*/
SELECT  DISTINCT MAX(salary) AS Salary FROM tblEmployees WHERE salary < (SELECT MAX(salary) FROM tblEmployees); --select the second largest salary
 
 WITH rankedEmployee AS(									--select 2nd larget salary with id
	SELECT employeeId, employeeFirstName, salary,
	DENSE_RANK() OVER (ORDER BY salary DESC) AS salaryRank
	FROM tblEmployees)
select distinct salary,employeeId from rankedEmployee where salaryRank = 2;


SELECT departmentId, count(*) AS Employee_Number FROM tblEmployees GROUP BY departmentId; --List the number of employees in each department. 


/*Created department table*/

CREATE TABLE tblDepartment	( departmentId VARCHAR(30) PRIMARY KEY, --created department table
						  departmentName VARCHAR(30));

INSERT INTO tblDepartment VALUES('D001','Project'); --inserted values to department table
INSERT INTO tblDepartment VALUES('D002','IT');
INSERT INTO tblDepartment VALUES('D003','BANKING');

select * from tblDepartment;


SELECT tblEmployees.employeeFirstName,tblEmployees.employeeLastName, tblDepartment.departmentName FROM tblEmployees INNER JOIN tblDepartment ON tblEmployees.departmentId = tblDepartment.departmentId; --did innerjoin
SELECT tblEmployees.employeeFirstName,tblEmployees.employeeLastName, tblDepartment.departmentName FROM tblEmployees LEFT JOIN tblDepartment ON tblEmployees.departmentId = tblDepartment.departmentId; --did leftjoin
SELECT tblEmployees.employeeFirstName,tblEmployees.employeeLastName, tblDepartment.departmentName FROM tblEmployees RIGHT JOIN tblDepartment ON tblEmployees.departmentId = tblDepartment.departmentId; --did rightjoin
SELECT tblEmployees.employeeFirstName,tblEmployees.employeeLastName, tblDepartment.departmentName FROM tblEmployees FULL OUTER JOIN tblDepartment ON tblEmployees.departmentId = tblDepartment.departmentId; --did full outer join


ALTER TABLE tblEmployees            --Added Foreign Key to employee as departmentId
ADD FOREIGN KEY (departmentId)
REFERENCES tblDepartment(departmentId);

SELECT e.employeeId, e.employeeFirstName, e.employeeLastName, e.salary, d.departmentId, d.departmentName --combine necessary fields from two different tables by using primary key and foreign key constraints.
FROM tblEmployees AS e
INNER JOIN tblDepartment AS d ON e.departmentId = d.departmentId;
								

/*  To implement diffrent CRUD [CREATE] operation */

CREATE PROCEDURE spCreateEntityDepartment @departmentId VARCHAR(30), @departmentName VARCHAR(30) --Add procedure to insert into department table	
AS
INSERT INTO tblDepartment(departmentId,departmentName) VALUES(@departmentId,@departmentName);
GO

EXEC spCreateEntityDepartment @departmentId = 'D005', @departmentName = 'Coaching';

DELETE FROM tblDepartment where departmentId = 'D005';
/* To implement diffrent CRUD [READ] operation */


CREATE PROCEDURE spGetAllEmployeeDetails -- To select all the employees
AS
SELECT * FROM tblEmployees;
GO

EXEC spGetAllEmployeeDetails;

CREATE PROCEDURE spGetEmployeefromcity @location varchar(30) --To select employes based on location
AS
SELECT * from tblEmployees where worklocation = @location;
GO

EXEC spGetEmployeefromcity @location = 'Banglore';

CREATE PROCEDURE spGetEmployeefromemployeeId @empId varchar(30) --To select employee based on empid
AS
SELECT * FROM tblEmployees WHERE employeeId = @empId;
GO
EXEC spGetEmployeefromemployeeId @empId = 'E001';

CREATE PROCEDURE spGetNameFromId @nameId varchar(30) --To get Employee name from empid
AS
SELECT employeeFirstName,employeeLastName FROM tblEmployees WHERE employeeID = @nameId;
GO
EXEC spGetNameFromId @nameId = 'E001';

CREATE PROCEDURE spGetDetailsFromDesignationLocation @designation varchar(30),@location varchar(30) --To get details of employe based on location and designation
AS
SELECT * FROM tblEmployees WHERE designation = @designation AND workLocation = @location;
GO
EXEC spGetDetailsFromDesignationLocation @designation = 'Project Manager',@location = 'Kochi';



/*  To implement diffrent CRUD [UPDATE] operation */

CREATE PROCEDURE spUpdateEmployeeLocation @employeeId varchar(30), @workLocation varchar(30)
AS

	UPDATE tblEmployees
	SET workLocation = @workLocation
	WHERE employeeId = @employeeId

GO


/* To implement diffrent CRUD [DELETE] operation */

CREATE PROCEDURE spDeleteEmployee @employeeId VARCHAR(30)
AS
DELETE FROM tblEmployees WHERE employeeId = @employeeId;
GO


/* Single Stored Procedure */

CREATE TABLE tblStudent (studentId VARCHAR(30),firstName VARCHAR(30), lastName VARCHAR(30));
GO

INSERT INTO tblStudent VALUES ('S001','Ram','Kumar');
INSERT INTO tblStudent VALUES ('S002','Joseph','Antony');
INSERT INTO tblStudent VALUES ('S003','Alexa','Prime');
INSERT INTO tblStudent VALUES ('S004','Cortana','Baker');

SELECT * FROM tblStudent;

CREATE PROCEDURE spStudentCRUD 
@operation varchar (30),
@studentID varchar (30),
@firstName varchar(30) = NULL,
@lastName varchar (30) = NULL
AS

BEGIN
	IF @operation = 'Create'
	BEGIN
		INSERT INTO tblStudent(studentId,firstName, lastName) VALUES(@studentID,@firstName,@lastName);
	END

	IF @operation = 'Read'
	BEGIN
		SELECT*FROM tblStudent WHERE studentId = @studentId;
	END
	IF @operation = 'Update'
	BEGIN
		UPDATE tblStudent
		SET firstName = @firstName, lastName = @lastName
		WHERE studentId = @studentId;
	END
	IF @operation = 'Delete'
	BEGIN
		DELETE FROM tblStudent 
		WHERE studentId = @studentId;
	END
END

EXEC spStudentCRUD @operation = 'Read',@studentID = 'S001'; --Execution
