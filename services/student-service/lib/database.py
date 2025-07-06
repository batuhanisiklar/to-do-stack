import os
import mysql.connector
from dotenv import load_dotenv,find_dotenv
from datetime import date

load_dotenv(find_dotenv())

def getStudents():
    students = []
    
    connection = mysql.connector.connect(
        host=os.environ.get("MYSQL_HOST"),
        port=int(os.environ.get("MYSQL_PORT")),
        user=os.environ.get("MYSQL_USER"),
        password=os.environ.get("MYSQL_PASSWORD"),
        database=os.environ.get("MYSQL_DB"),
    )

    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM students")

    results = cursor.fetchall()

    for row in results:
        # Convert date objects to string format
        for key, value in row.items():
            if isinstance(value, date):
                row[key] = value.isoformat()
        students.append(row)

    cursor.close()
    connection.close()

    return students