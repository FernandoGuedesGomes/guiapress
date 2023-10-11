DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS categories;
--
CREATE TABLE categories (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) DEFAULT NULL,
  slug varchar(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
--
INSERT INTO categories VALUES (1,'Node e Mongo','Node-e-Mongo','2023-10-07 15:50:44','2023-10-07 15:50:44'),(2,'PHP','PHP','2023-10-07 15:50:54','2023-10-07 15:50:54'),(3,'HTML, CSS E JAVASCRIPT','HTML-CSS-E-JAVASCRIPT','2023-10-07 15:51:17','2023-10-07 15:51:17'),(4,'Angular e React','Angular-e-React','2023-10-07 15:51:28','2023-10-07 15:51:28');
--