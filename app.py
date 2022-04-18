from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html', utc_dt=datetime.datetime.utcnow())

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/dashboard/')
def dash():
    return render_template('dashboard.html')

@app.route('/crud/')
def crud():
    return render_template('crud.html')

@app.route('/add_record/')
def add():
    return render_template('add_record.html')