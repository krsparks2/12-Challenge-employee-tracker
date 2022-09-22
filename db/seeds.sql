INSERT INTO department
    (deptname)
VALUES
    ('Sales'),
    ('Public Relations'),
    ('Purchasing'),
    ('Manufacture');

INSERT INTO jobtitle
    (title, salary, department_id)
VALUES
    ('Head of Sales', 60000, 1),
    ('Outside Sales', 45000, 1),
    ('Public Relations Manager', 100000, 2),
    ('Social Media Manager', 45000, 2),
    ('Head of Purchasing', 75000, 3),
    ('Purchasing Agent', 60000, 3)
    ('Foreman', 40000, 4),
    ('Floor Worker', 30000, 1);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES