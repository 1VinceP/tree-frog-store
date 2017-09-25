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
        ( 'vincent', 'myemail@gmail.com', '1776 Bald Eagle Ave', null, 'Provo', 'Utah', '98765', null, null );

------------------------------------------------------------------------- PRODUCTS TABLE

CREATE TABLE Products
 (
     id SERIAL PRIMARY KEY,
     type TEXT,
     material TEXT,
     baseColor TEXT,
     secondaryColor TEXT,
     decoration TEXT,
     decoColor TEXT,
     centerCandle TEXT,
     centerBase TEXT,
     request VARCHAR(300),
     imgUrl TEXT,
     creatorId INTEGER,
     paid BOOLEAN,
     shipped BOOLEAN
 );

 INSERT INTO Products
    ( type, material, baseColor, secondaryColor, decoration, decoColor, centerCandle, centerBase, request, imgUrl, creatorId, paid, shipped )
    VALUES
        -- Headbands
        ( 'headband', 'ribbon', 'lavender', 'white', 'butterfly', 'pink', '', '', '', 'https://photos-2.dropbox.com/t/2/AADFz574Y9bpZ60sXu-F-xH0Aha_b3Ri_DJhc88firHPHg/12/632623851/jpeg/32x32/1/_/1/2/DSCF9125.JPG/EMiZ0eAFGDYgBygH/Shs4Pjg5VDm0tnoCbQUYShCFd9A_sF7RwoOrjT5F3xA?size=1280x960&size_mode=3', 0, false, true ),
        ( 'headband', 'ribbon', 'sky blue', 'white', 'rose', 'yellow', '', '', 'Double rose design', 'https://photos-6.dropbox.com/t/2/AAAnbmQAuI8lm0dKVMLw5PywLR5AV2QwAGYWfhsG53sY-g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9129.JPG/EMiZ0eAFGDYgBygH/V60MDm2dVDuvblDGLYgHKZ0BBCVOK7IFsEzYT_Sz5K8?size=1280x960&size_mode=3', 0, false, false ),
        ( 'headband', 'ribbon', 'pink', '', 'other flower', 'navy-blue', '', '', 'spikey with jewels in center. Lots of jewels, because I like them', 'https://photos-3.dropbox.com/t/2/AAClzqd8PEE_0EiogZA33nPa9XNanVcKtisMuKfukfNr3Q/12/632623851/jpeg/32x32/1/_/1/2/DSCF9142.JPG/EMiZ0eAFGPMBIAcoBw/HH8KRrw_97wKXkxAq0mIAuah0lmgtcZtkE8J9w-XFs4?size=1280x960&size_mode=3', 0, true, false ),
        -- Flowers
        ( 'flower', 'ribbon', 'orange', 'white', 'pearl', 'white', '', '', '', 'https://photos-3.dropbox.com/t/2/AAC1MnlN50lkTPbrevqvDI_LHSleRaZvqw0wXu8l0nPZiQ/12/632623851/jpeg/32x32/1/_/1/2/DSCF9186.JPG/EMiZ0eAFGPMBIAcoBw/zSRDBV0vTSp8kdvz1GMDXcdqf3RLuVk1Xle8bS5gZKY?size=1280x960&size_mode=3', 0, true, true ),
        ( 'flower', 'ribbon', 'orange', 'yellow', 'jewel', 'white', '', '', '', 'https://photos-4.dropbox.com/t/2/AABwb0Dm48mGJegJ6OSv0qIfdZV4V7-XNQEKsEOxFovhew/12/632623851/jpeg/32x32/1/_/1/2/DSCF9171.JPG/EMiZ0eAFGPMBIAcoBw/eW84gXbqrrKwrOOvmRvye903FGQTwYVulz4RMXY4Q6k?size=1280x960&size_mode=3', 0, true, true ),
        -- Centerpieces
        ( 'centerpiece', 'ribbon', 'navy-blue', 'white', 'rose', '', 'open', 'round-mirror', '', 'https://photos-3.dropbox.com/t/2/AAAEMzvMRe1MtHhMI4qxMKLS9gPOnLu0-CZW1KyGBUgj0g/12/632623851/jpeg/32x32/1/_/1/2/DSCF9254.JPG/EMiZ0eAFGPMBIAcoBw/qq_CVXxaRwyh_XlOwvwb9CEYt_Q5UziueignuzIhyCM?size=1280x960&size_mode=3', 0, true, false );

------------------------------------------------------------------------- ORDERS TABLE

-- CREATE TABLE Orders
-- (
--     id SERIAL PRIMARY KEY,
--     oderId INTEGER,
--     FOREIGN KEY ( orderId ) REFERENCES Users( orderId )
-- );