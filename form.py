from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)


app.config['MYSQL_HOST'] = ' remotemysql.com '
app.config['MYSQL_USER'] = 'mpelXDDRJY'
app.config['MYSQL_PASSWORD'] = 'r3KEzuSVtb'
app.config['MYSQL_DB'] = 'mpelXDDRJY'

mysql = MySQL(app)


@app.route('/crud/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        details = request.form
        datetime = details['datetime']
        env_id = details['env_id']
        num_of_leaves = details['num_of_leaves']
        height = details['height']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Growth(datetime, env_id, num_of_leaves) VALUES (%s, %s, %s, %s)", (datetime, env_id, num_of_leaves, height))
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('crud.html')

if __name__ == '__main__':
    app.run()