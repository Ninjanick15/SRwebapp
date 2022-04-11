from __future__ import print_function
from flask import Flask, render_template, request, flash
from datetime import date
from datetime import date, datetime, timedelta
import mysql.connector

app = Flask(__name__)

rootdb = mysql.connector.connect(
    host='remotemysql.com',
    user='mpelXDDRJY', 
    password='r3KEzuSVtb',                        
    database='mpelXDDRJY'
    )

rootdb.commit()

rootdb.close()