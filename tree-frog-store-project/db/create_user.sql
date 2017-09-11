INSERT INTO Users
    ( username, password, email, orderId, auth_id )
    VALUES
        ( $1, $2, $3, $4, $5 )
            RETURNING *;