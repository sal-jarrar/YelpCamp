CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE campground(
    camp_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- INSERT INTO campground(title,location,image,price,description,created_at,user_id) VALUES ('test','CA','img-1',123,'test 1','2023-01-12',1);
-- INSERT INTO users(name,email,password) VALUES ('sultan jarrar','sultan@email.com','password');