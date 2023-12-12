CREATE TABLE IF NOT EXISTS Products
(
    id                BIGSERIAL    PRIMARY KEY ,
    product_name      VARCHAR(200) NOT NULL,
    supplier_id       BIGINT,
    category_id       BIGINT,
    quantity_per_init INT          NOT NULL,
    unit_price        INT          NOT NULL,
    unit_in_stock     INT,
    units_on_order    INT,
    reorder_level     INT,
    discount          INT
);