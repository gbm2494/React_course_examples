CREATE TABLE `type_task` (
`id` int(11) AUTO_INCREMENT,
`name` varchar(20),
PRIMARY KEY (`id`)
);

CREATE TABLE `status_task` (
`id` int(11) AUTO_INCREMENT,
`name` varchar(20),
PRIMARY KEY (`id`)
);

CREATE TABLE `todo_item` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  FOREIGN KEY (`type_id`) REFERENCES `type_task` (`id`),
  FOREIGN KEY (`status_id`) REFERENCES `status_task` (`id`)
);
