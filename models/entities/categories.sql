CREATE TABLE IF NOT EXISTS Categories
(
    id            BIGSERIAL PRIMARY KEY,
    category_name VARCHAR(200),
    description   TEXT,
    picture       VARCHAR
);