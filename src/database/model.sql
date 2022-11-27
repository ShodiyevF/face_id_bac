create database faceid;

drop table if exists users cascade;
create table users(
    user_id int generated always as identity primary key,
    user_name varchar(60) not null,
    user_login varchar(16) not null unique,
    user_password varchar(16) not null,
    creator smallint default 0
);

drop table if exists creator cascade;
create table creator(
    creator_id int generated always as identity primary key,
    creater_id int references users(user_id) unique,
    created_id int not null references users(user_id)
);

drop table if exists branch cascade;
create table branch(
    branch_id int generated always as identity primary key,
    branch_name varchar(36) not null,
    branch_owner int references users(user_id)
);

drop table if exists branch_members cascade;
create table branch_members(
    branch_member_id int generated always as identity primary key,
    user_id int not null references users(user_id) unique,
    branch_id int references branch(branch_id)
);

drop table if exists workers cascade;
create table workers(
    workers_id int generated always as identity primary key,
    worker_fish varchar(36) not null,
    worker_age smallint,
    worker_address varchar(36) not null,
    worker_phone varchar(13) not null,
    worker_imgpath varchar(100) not null,
    worker_register_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    worker_salary text not null,
    worker_salary_hour varchar(4) not null,
    branch_id int not null references branch(branch_id)
);