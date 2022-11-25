create database faceid;

drop table if exists users cascade;
create table users(
    user_id int generated always as identity primary key,
    user_name varchar(60) not null,
    user_login varchar(16) not null,
    user_password varchar(16) not null,
    creator varchar(1) default 0
);

drop table if exists creator cascade;
create table creator(
    creator_id int generated always as identity primary key,
    creater_id int not null references users(user_id) unique,
    created_id int not null references users(user_id)
);