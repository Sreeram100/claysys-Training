--create database phase2;
--go

--use phase2;
--go


create table employee ( empid varchar(30) primary key,
						empfirstname varchar(30),
						emplastname varchar(30),
						dob date, 
						age int,
						sex varchar(10),
						designation varchar(30),
						loc varchar(30),
						deptid varchar(30),
						salary int);

go

insert into employee values('E001', 'Aston', 'James', '1990-07-09', 32,'Male', 'Project Manager','Kochi', 'D001', 50000);
insert into employee values('E002', 'Erik', 'Jhon', '1980-08-26', 43,'Male', 'Delivery Manager','Thrissur', 'D002', 150000);
insert into employee values('E003', 'Rose', 'Warner', '1989-02-01', 34,'Female', 'Sr Developer','Coimbatore', 'D003', 80000);
insert into employee values('E004', 'Gordon', 'Ramsey', '1983-09-27', 40,'Male', 'Associate Developer','Chennai', 'D003', 60000);
insert into employee values('E005', 'Susan', 'Wilson', '1992-09-16', 31,'Female', 'Software Developer','Banglore', 'D002', 60000);
insert into employee values('E006', 'Dominic', 'Miller', '1989-08-02', 34,'Male', 'Software Developer','Goa', 'D003', 55000);
insert into employee values('E007', 'Lexi', 'Robert', '1985-07-12', 38,'Female', 'Project Manager','Hydrebad', 'D001', 118000);
insert into employee values('E008', 'Arjun', 'Reddy', '1993-09-03', 29,'Male', 'Project Manager','Delhi', 'D001', 110000);
insert into employee values('E009', 'Robert', 'Downey', '1994-09-06', 29,'Male', 'Trainee','Mumbai', 'D003', 58000);
insert into employee values('E010', 'Chris', 'Rock', '1986-07-29', 37,'Male', 'HR Manager','Kochi', 'D002', 150000);
insert into employee values('E011', 'Christo', 'Roger', '1980-07-9', 43,'Male', 'Backend Dev','Banglore', 'D002', 150000);

select*from employee; --select whole table

update employee			--update the location of empid E010 to Banglore
set loc = 'Banglore'
where empid = 'E010';

delete from employee where empid = 'E011'; --deleted Employee row with empid E011

select empid as EmployeeId ,empfirstname as Firstname from employee where deptid = 'D002'; --select empid and empfirstname with depid D002
