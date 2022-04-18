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
    

app.config['MYSQL_HOST'] = ''
app.config['MYSQL_USER'] = ''
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = ''

mysql = MySQL(app)


@app.route('/crud', methods=['GET', 'POST'])
def growth():
    if request.method == "POST":
        details = request.form
        datetime = details['datetime']
        env_id = details['env_id']
        num_of_leaves = details['num_of_leaves']
        height = details['height']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Growth(datetime, env_id, num_of_leaves, height) VALUES (%s, %s, %s, %s)", (datetime, env_id, num_of_leaves, height))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('crud.html')

if __name__ == '__main__':
    app.run()