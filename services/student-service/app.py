from lib import database
from flask import Flask , jsonify
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route('/info')
def get_students():
    return jsonify(database.getStudents())

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)