CREATE TABLE `type_task` (
`id` int(11) AUTO_INCREMENT,
`name` varchar(20),
PRIMARY KEY (`iid`)
);

CREATE TABLE `todos` (
`task_id` int(11) AUTO_INCREMENT,
`name` varchar(50),
`description` varchar(200),
`priority` int(11),
`type_id` int(11),
PRIMARY KEY (`task_id`),
foreign key (`type_id` ) references `type_task`(`id` )
);
