from __future__ import print_function
from datetime import date, datetime, timedelta
import mysql.connector

rootdb = mysql.connector.connect(
    host='50.62.144.120',
    user='gljo4uxrniy6', 
    password='Wildcats1863',                        
    database='root-access'
    )

cursor = rootdb.cursor()

add_growth = ("INSERT INTO Growth (datetime, env_id, num_of_leaves, height) VALUES (%s, %s, %s, %s)")

growth_data = (date(1977, 6, 14), '4', '3', '13')

# Insert new growth
cursor.execute(add_growth, growth_data)

# Make sure data is committed to the database
rootdb.commit()

cursor.close()

rootdb.close()