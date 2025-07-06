from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Tüm kaynaklara CORS izni ver

AUTH_SERVICE_URL = "http://localhost:5001/auth/login"  # Auth Service'in adresi

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    response = requests.post(AUTH_SERVICE_URL, json=data)

    if response.status_code != 200:
        return jsonify(response.json()), response.status_code

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)