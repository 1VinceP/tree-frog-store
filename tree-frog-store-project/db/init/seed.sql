DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Orders;

------------------------------------------------------------------------- USERS TABLE

CREATE TABLE Users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    street1 TEXT,
    street2 TEXT,
    city TEXT,
    state TEXT,
    zip INTEGER,
    orderId INTEGER,
    auth_id TEXT
);

INSERT INTO Users
    ( username, email, street1, street2, city, state, zip, orderId, auth_id )
    VALUES
        ( 'vincent', 'myemail@gmail.com', '1234 Sesame St', null, 'Provo', 'UT', '98765', null, null );

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
        ( 'Flower Girl Headband', 'Double Butterfly', 'headband', 'https://photos-2.dropbox.com/t/2/AADFz574Y9bpZ60sXu-F-xH0Aha_b3Ri_DJhc88firHPHg/12/632623851/jpeg/32x32/1/_/1/2/DSCF9125.JPG/EMiZ0eAFGDYgBygH/Shs4Pjg5VDm0tnoCbQUYShCFd9A_sF7RwoOrjT5F3xA?size=1280x960&size_mode=3' ),
        ( 'Flower Girl Headband', 'Double Rose', 'headband', 'https://photos-6.dropbox.com/t/2/AAAnbmQAuI8lm0dKVMLw5PywLR5AV2QwAGYWfhsG53sY-g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9129.JPG/EMiZ0eAFGDYgBygH/V60MDm2dVDuvblDGLYgHKZ0BBCVOK7IFsEzYT_Sz5K8?size=1280x960&size_mode=3' );

------------------------------------------------------------------------- ORDERS TABLE

-- CREATE TABLE Orders
-- (
--     id SERIAL PRIMARY KEY,
--     oderId INTEGER,
--     FOREIGN KEY ( orderId ) REFERENCES Users( orderId )
-- );