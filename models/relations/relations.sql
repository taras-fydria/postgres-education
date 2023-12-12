ALTER TABLE products
    ADD FOREIGN KEY (category_id) REFERENCES categories (id),
    ADD FOREIGN KEY (supplier_id) REFERENCES suppliers (id);