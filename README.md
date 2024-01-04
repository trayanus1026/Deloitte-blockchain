In your new_mgldefi.sql file

CREATE TABLE `email_verify` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `verify_code` varchar(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   <------------- error


should convert to utf8mb4_general_ci from utf8mb4_0900_ai_ci of all table

