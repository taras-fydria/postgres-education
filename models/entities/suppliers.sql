CREATE TABLE IF NOT EXISTS Suppliers
(
    id            BIGSERIAL PRIMARY KEY ,
    company_name  VARCHAR(200) NOT NULL,
    contact_name  VARCHAR(200) NOT NULL,
    contact_title VARCHAR(200) NOT NULL,
    address       TEXT         NOT NULL,
    city          VARCHAR(300) NOT NULL,
    region        VARCHAR(300) NOT NULL,
    postal_code   INT,
    country       VARCHAR(300),
    phone         VARCHAR(100),
    fax           VARCHAR(200),
    homepage      VARCHAR(200)
)