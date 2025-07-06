import os
import mysql.connector
from dotenv import load_dotenv,find_dotenv
from datetime import date

load_dotenv(find_dotenv())

def login():
    users = []
    connection = mysql.connector.connect(
        host=os.environ.get("MYSQL_HOST"),
        port=int(os.environ.get("MYSQL_PORT")),
        user=os.environ.get("MYSQL_USER"),
        password=os.environ.get("MYSQL_PASSWORD"),
        database=os.environ.get("MYSQL_DB"),
    )

    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM users")

    results = cursor.fetchall()

    for row in results:
        for key, value in row.items():
            if isinstance(value, date):
                row[key] = value.isoformat()
        users.append(row)

    cursor.close()
    connection.close()

    return users