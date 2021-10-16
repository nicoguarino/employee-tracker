INSERT INTO department (name)
VALUES
('IT'),
('Computer Science'),
('Enviromental'),
('Legal'),
('HR'),
('Design');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', '100000.00', '1'),
('Asistant Manager', '85000', '1'),
('IT Specialist', '75000', '1'),
('Manager', '200000', '2'),
('Asistant Manager', '150000', '2'),
('CS Dev', '100000', '2'),
('Manager', '75000', '3'),
('Asistant Manager', '70000', '3'),
('Enviro Advacate', '65000', '3'),
('Clerk', '225000', '4'),
('Deputy Clerk', '200000', '4'),
('Intern', '50000', '4'),
('Manager', '55000', '5'),
('Asistant Manager', '50000', '5'),
('HR Rep', '45000', '5'),
('Manager', '200000', '6'),
('Asistant Manager', '150000', '6'),
('designer', '100000', '6');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Fraser', '1', NULL),
('Jack', 'London', '2', '1'),
('Robert', 'Bruce', '3', '1'),
('Peter', 'Greenaway', '4', NULL),
('Derek', 'Jarman', '5', '4'),
('Paolo', 'Pasolini', '6', '4'),
('Heathcote', 'Williams', '7', NULL),
('Sandy', 'Powell', '8', '7'),
('Emil', 'Zola', '9', '7'),
('Sissy', 'Coalpits', '10', NULL),
('Antoinette', 'Capet', '11', '10'),
('Samuel', 'Delany', '12', '10'),
('Tony', 'Duvert', '13', NULL),
('Dennis', 'Cooper', '14', '13'),
('Monica', 'Bellucci', '15', '13'),
('Samuel', 'Johnson', '16', NULL),
('John', 'Dryden', '17', '16'),
('Alexander', 'Pope', '18', '16');

