# SELECT * FROM students;

# SELECT * FROM students WHERE age = 15;

# SELECT * FROM students WHERE name = 'olga';

# SELECT * FROM students WHERE name LIKE '%o';

# SELECT * FROM students WHERE name LIKE '___a%';

# SELECT * FROM students WHERE LENGTH(name) = 4;

# SELECT * FROM students ORDER BY name DESC;

# SELECT * FROM students ORDER BY age DESC;

# SELECT * FROM students ORDER BY age DESC LIMIT 4;

# SELECT * FROM students ORDER BY age DESC LIMIT 2 OFFSET 1;

# SELECT * FROM students ORDER BY age DESC LIMIT 5 OFFSET 0;
# SELECT * FROM students ORDER BY age DESC LIMIT 5 OFFSET 5;
# SELECT * FROM students ORDER BY age DESC LIMIT 5 OFFSET 10;

# SELECT * FROM students WHERE age > 20 AND name LIKE 'a%';

# SELECT * FROM students WHERE age > 20 OR name LIKE 'o%' OR gender = 'male';

# SELECT * FROM students WHERE age BETWEEN 20 AND 30;

# SELECT * FROM students WHERE age BETWEEN 20 AND 30 OR name LIKE 'o%';

# SELECT MAX(age) FROM students;

# SELECT MIN(age) FROM students;

# SELECT AVG(age) FROM students;

# SELECT SUM(age) FROM students;

# SELECT COUNT(id) FROM students;

# SELECT COUNT(id) FROM students WHERE age > 40;

# SELECT AVG(rating) FROM ratings WHERE student_id = 3;
