DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Products;

------------------------------------------------------------------------- USERS TABLE

CREATE TABLE Users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    orderId INTEGER,
    auth_id TEXT
);

INSERT INTO Users
    ( username, password, email, orderId, auth_id )
    VALUES
        ( 'vincent', 'password', 'myemail@gmail.com', null, null );

------------------------------------------------------------------------- PRODUCTS TABLE

CREATE TABLE Products
 (
     id SERIAL PRIMARY KEY,
     name TEXT,
     description TEXT,
     type TEXT,
     imgUrl TEXT
 );

 INSERT INTO Products
    ( name, description, type, imgUrl )
    VALUES
        ( 'First', 'This is stuff', 'flower', 'www.website.com' );

------------------------------------------------------------------------- ORDERS TABLE

CREATE TABLE Orders
(
    id SERIAL PRIMARY KEY,
    oderId INTEGER,
    FOREIGN KEY ( orderId ) REFERENCES Users( orderId )
);