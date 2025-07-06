from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, JWTManager
import datetime

# Flask Uygulaması
app = Flask(__name__)

# MySQL Bağlantısı
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:Batu1204@localhost/auth"
app.config["JWT_SECRET_KEY"] = "gizli"

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Kullanıcı Modeli (Mevcut tablonu kullanıyor)
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_teacher = db.Column(db.Boolean, default=False)

# Giriş Endpoint'i
@app.route("/auth/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401
        
    try:
        password_valid = bcrypt.check_password_hash(user.password, password)
        if not password_valid:
            return jsonify({"error": "Invalid credentials"}), 401
    except ValueError:
        return jsonify({"error": "Invalid password hash in database"}), 500

    token = create_access_token(
        identity={"email": user.email, "is_teacher": user.is_teacher},
        expires_delta=datetime.timedelta(hours=1)
    )
    return jsonify({"access_token": token, "token_type": "bearer"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)