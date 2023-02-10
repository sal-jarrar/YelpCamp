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
    image VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE review(
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    rating DECIMAL(8,2) NOT NULL,
    user_id INT NOT NULL,
    camp_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (camp_id) REFERENCES campground(camp_id)
);


-- INSERT INTO campground(title,location,image,price,description,created_at,user_id) VALUES ('test','CA','img-1',123,'test 1','2023-01-12',1);
-- INSERT INTO users(name,email,password) VALUES ('sultan jarrar','sultan@fundstory.com','123');
-- SELECT * FROM users WHERE email='sul-89-tn@hotmail.com';
-- INSERT INTO review(rating,comment,created_at,user_id,camp_id) VALUES (3,'test 1','2023-01-12',1,1);
--  UPDATE campground SET image='https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2909&q=80' WHERE camp_id = '1';