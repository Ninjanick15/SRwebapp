from __future__ import print_function
from datetime import date, datetime, timedelta
import mysql.connector

cnx = mysql.connector.connect(user='gljo4uxrniy6', password='Wildcats1863',
                              host='50.62.144.120',
                              database='root-access')

cursor = cnx.cursor()

add_growth = ("INSERT INTO Growth "
               "(datetime, env_id, num_of_leaves, height) "
               "VALUES (%s, %s, %s, %s)")

data_growth = (date(1977, 6, 14), '4', '3', '13')

# Insert new growth
cursor.execute(add_growth, data_growth)
emp_no = cursor.lastrowid

# Make sure data is committed to the database
cnx.commit()

cursor.close()

cnx.close()