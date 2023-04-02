-- Database: ptdb

-- DROP DATABASE IF EXISTS ptdb;

CREATE DATABASE ptdb
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1250'
    LC_CTYPE = 'English_United States.1250'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
SELECT *
FROM pg_settings
WHERE name = 'port';

create table general_info (
id serial primary key,
p_name varchar(50),
dob date,
education varchar(200),
place varchar(50)
);

insert into general_info (p_name, dob, education, place) values
('Razvan-Dan Salsigan', '2000-09-21', 'Computer Science Bachelors Degree at UBB', 'Cluj-Napoca'),
('Dorel', '1473-01-01', 'Dat cu sapa competitiv', 'Sub deal');