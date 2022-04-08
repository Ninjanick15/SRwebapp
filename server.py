from __future__ import print_function
from flask import Flask
from datetime import date, datetime, timedelta
import mysql.connector

app = Flask(__name__)

rootdb = mysql.connector.connect(
    host='remotemysql.com',
    user='mpelXDDRJY', 
    password='r3KEzuSVtb',                        
    database='mpelXDDRJY'
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

