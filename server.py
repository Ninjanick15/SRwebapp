from __future__ import print_function
from flask import Flask, render_template, request
from datetime import date, datetime, timedelta
import mysql.connector

app = Flask(__name__)

rootdb = mysql.connector.connect(
    host='remotemysql.com',
    user='mpelXDDRJY', 
    password='r3KEzuSVtb',                        
    database='mpelXDDRJY'
    )

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-text', methods=['GET', 'POST'])
def foo():
    bar = request.form['test']

if __name__ == '__main__':
    app.run()

# cursor = rootdb.cursor()

# add_growth = ("INSERT INTO Growth (datetime, env_id, num_of_leaves, height) VALUES (%s, %s, %s, %s)")

# growth_data = (date(1977, 6, 14), '4', '3', '13')

# # Insert new growth
# cursor.execute(add_growth, growth_data)

# Make sure data is committed to the database
rootdb.commit()

# cursor.close()

rootdb.close()

