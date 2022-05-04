from flask import Flask,  request, render_template, redirect, url_for, session
import datetime
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

app.secret_key = 'jOE_dIRTAY'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/dashboard/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/crud')
def crud():
    return render_template('crud.html')    

app.config['MYSQL_HOST'] = 'remotemysql.com'
app.config['MYSQL_USER'] = 'mpelXDDRJY'
app.config['MYSQL_PASSWORD'] = 'r3KEzuSVtb'
app.config['MYSQL_DB'] = 'mpelXDDRJY'

mysql = MySQL(app)

@app.route('/login', methods=['GET', 'POST'])
def login():
    msg='Username or Password incorrect!'
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM User WHERE UserName = %s AND PassWord = %s', (username, password,))
        account = cursor.fetchone()
        if account:
            session['loggedin'] = True
            session['UserName'] = account['PassWord']         
        else:
            return(msg)
        return render_template('dashboard.html')  

@app.route('/crud', methods=['GET', 'POST'])
def growth():
    now = datetime.datetime.utcnow()
    if request.method == "POST":
        details = request.form
        date = now.strftime('%Y-%m-%d %H:%M:%S')
        env_id1 = details['env_id1']
        num_of_leaves = details['num_of_leaves']
        height = details['height']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Growth(datetime, env_id, num_of_leaves, height) VALUES (%s, %s, %s, %s)", (date, env_id1, num_of_leaves, height))
        mysql.connection.commit()
        cur.close()
        return 'success'  
    return render_template('crud.html')

@app.route('/env', methods=['GET', 'POST'])
def enviroment():
    now = datetime.datetime.utcnow()
    if request.method == "POST":
        details = request.form
        env_id2 = details['env_id2']
        plant_id1 = details['plant_id1']
        is_running = details['is_running']
        startdate = now.strftime('%Y-%m-%d %H:%M:%S')
        name1 = details['name1']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Enviroment(env_id, plant_id, is_running, startdate, name) VALUES (%s, %s, %s, %s, %s)", (env_id2, plant_id1, is_running, startdate, name1))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('env.html')

@app.route('/plant', methods=['GET', 'POST'])
def plant():
    if request.method == "POST":
        details = request.form
        plant_id2 = details['plant_id2']
        name2 = details['name2']
        RequiredMoisture = details['RequiredMoisture']
        RequiredLight = details['RequiredLight']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Plant(plant_id, name, RequiredMoisture, RequiredLight) VALUES (%s, %s, %s, %s)", (plant_id2, name2, RequiredMoisture, RequiredLight))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('plant.html')

if __name__ == '__main__':
    app.run()