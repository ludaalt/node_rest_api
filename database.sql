create TABLE user(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    age INTEGER,
    isFree BOOLEAN,
    createdAt DATE,
    updatedAt DATE
);

create TABLE book(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    author VARCHAR(40),
    createdAt DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES user(id)
);