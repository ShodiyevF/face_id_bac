-- USERS

insert into users (user_name, user_login, user_password, creator) values 
('fayzulloh shodiyev', '6661114', '6661114', 777),
('g''aniyev akrom', '1234', '1234', 1),
('akrom admin', '4321', '4321', 0);

-- CREATOR

insert into creator (creater_id, created_id) values 
(2, 1);

-- BRANCH

insert into branch (branch_name, branch_owner) values 
('akrom door', 2);

-- branch_member

insert into branch_members (user_id, branch_id) values 
(3, 1);

-- workers

