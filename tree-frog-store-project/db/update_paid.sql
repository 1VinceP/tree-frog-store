UPDATE Products
    SET paid = true
        WHERE id = $1
            RETURNING *;