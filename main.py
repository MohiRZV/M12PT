import psycopg2
from flask import Flask, json
from flask_cors import CORS
app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

@app.route('/')
def hello():
    connectDb()
    return '<h1>Hello, World!</h1>'


id = 1


@app.route('/hobby')
def getHobbies():
    conn = psycopg2.connect(database="ptdb",
                            user="postgres",
                            password="1234",
                            host="localhost", port="5432")

    cur = conn.cursor()

    cur.execute(
        "select G.id, H.* from general_info as G inner join hobby_user as HU on HU.user_id = G.id inner join hobby as H on HU.hobby_id = H.id where G.id="+str(id))

    data = cur.fetchall()

    cur.close()
    conn.close()

    response = [x[2] for x in data]

    print(response)
    return response

@app.route('/work')
def getWork():
    conn = psycopg2.connect(database="ptdb",
                            user="postgres",
                            password="1234",
                            host="localhost", port="5432")

    cur = conn.cursor()

    cur.execute(
        "select W.* from general_info as G inner join work_experience as W on G.id = W.user_id where G.id="+str(id))

    data = cur.fetchall()

    cur.close()
    conn.close()

    response = [{"workplace":x[2], "started":x[3], "ended":x[4], "current_p":x[5]} for x in data]

    print(response)
    return response

@app.route('/general-info')
def getGeneral():
    conn = psycopg2.connect(database="ptdb",
                            user="postgres",
                            password="1234",
                            host="localhost", port="5432")

    cur = conn.cursor()

    cur.execute(
        "select * from general_info where id="+str(id))

    data = cur.fetchall()

    cur.close()
    conn.close()

    response = [{"p_name":x[1], "dob":x[2], "education":x[3], "place":x[4]} for x in data]

    print(response)
    return response

def connectDb():
    conn = psycopg2.connect(database="ptdb",
                            user="postgres",
                            password="1234",
                            host="localhost", port="5432")

    cur = conn.cursor()

    conn.commit()

    cur.close()
    conn.close()
