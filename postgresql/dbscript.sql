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

create table work_experience (
	id serial primary key,
	user_id int,
	workplace varchar(200),
	started date,
	ended date,
	current_p boolean,
	constraint fk_user foreign key(user_id) references general_info(id)
)

insert into work_experience(user_id, workplace, started, ended, current_p) values
(1, 'Telenav', '2021-07-04', NULL, true),
(2, 'PNT', '1474-01-01', '1989-12-22', false)

select W.* from general_info as G inner join work_experience as W on G.id = W.user_id;

create table hobby (
	id serial primary key,
	name varchar(50)
)

insert into hobby (id, name) values
(1, 'Fishing'),
(2, 'Video games'),
(3, 'Programming'),
(4, 'Traveling'),
(5, 'Many iscusitul'),
(6, 'Fix tevi'),
(7, 'Know it all'),
(8, 'Rubbing the menta')

create table hobby_user (
	user_id int,
	hobby_id int,
	primary key (user_id, hobby_id)
)

insert into hobby_user values
(1,1), (1,2), (1,3), (1,4), (2,5), (2,6), (2,7), (2,8)

select G.id, H.* from general_info as G inner join hobby_user as HU on HU.user_id = G.id inner join hobby as H on HU.hobby_id = H.id;