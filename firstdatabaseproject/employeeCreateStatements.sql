drop database if exists employeeDb;
create database employeeDb;
 use employeeDb;

 create table employee(
    id integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15),
    salary decimal(6,2)
 );

 insert into employee values(1,'Preeti','Agrawal','ict',5000);

 insert into employee(id,firstname,lastname,department,salary) values(2,'Saurabh','Garg','ict',5400);

 drop user if  exists 'zeke'@'localhost';
 create user 'zeke'@'localhost' identified by '1234';

-- or if you don't want to drop the user
 -- create user if not exists 'zeke'@'localhost' identified by '1234';

 grant all privileges on employeeDb.* to 'zeke'@'localhost';


