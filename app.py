from flask import Flask,  request, render_template
import datetime
from flask_mysqldb import MySQL

app = Flask(__name__)

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

@app.route('/crud', methods=['GET', 'POST'])
def growth():
    if request.method == "POST":
        details = request.form
        datetime = details['datetime']
        env_id1 = details['env_id1']
        num_of_leaves = details['num_of_leaves']
        height = details['height']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Growth(datetime, env_id, num_of_leaves, height) VALUES (%s, %s, %s, %s)", (datetime, env_id1, num_of_leaves, height))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('crud.html')

@app.route('/env', methods=['GET', 'POST'])
def enviroment():
    if request.method == "POST":
        details = request.form
        env_id2 = details['env_id2']
        plant_id1 = details['plant_id1']
        is_running = details['is_running']
        startdate = details['startdate']
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