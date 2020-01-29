# SELECT * FROM students WHERE age > 20 OR gender LIKE 'm%';

# SELECT SUM(age) FROM students

# SELECT SUM(age) AS 'Age sum'
# FROM students;

# SELECT MAX(age) AS 'TheOldestUser'
# FROM students;


# SELECT COUNT(name) as 'namesCount',
#        name
# FROM students
# GROUP BY name
# ORDER BY namesCount DESC

# SELECT COUNT(student_id) as goddBioyzz,
#        lesson_id
# FROM ratings
# WHERE rating = 5
# GROUP BY lesson_id

# SELECT DISTINCT(label),
#                student_count,
#                date,
#                lesson.id
# FROM lesson
#          JOIN ratings
#               ON lesson.id = ratings.lesson_id
# WHERE rating = 5;

# SELECT s.*, l.label, COUNT(rating) as IMolodetc
# FROM students s
#          LEFT JOIN ratings r ON s.id = r.student_id
#          LEFT JOIN lesson l ON r.lesson_id = l.id
# WHERE rating = 5
# GROUP BY s.name, s.id, s.age, s.gender, l.label

# SELECT *
# FROM students s
#          JOIN ratings r ON s.id = r.student_id
#          JOIN lesson l ON r.lesson_id = l.id
# WHERE rating = 5

# DELETE FROM students WHERE age < 20;

# UPDATE students
# SET age  = 99,
#     name = 'Dido'
# WHERE gender = 'male'
