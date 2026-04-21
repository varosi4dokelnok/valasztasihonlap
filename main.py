from flask import *

app = Flask(__name__)
app.secret_key = "szagdok"
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/program")
def program():
    return render_template("program.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method=="POST":
        user = request.form["nev"]
        session["user"] = user
        return redirect(url_for("admin"))
    return render_template("login.html")


@app.route("/admin")
def admin():
    if "user" in session:
        print(f"'{session["user"]}' bejelentkezett")
        return render_template("admin.html")
    print("nem jelentkezett be")
    return redirect(url_for("login"))

if __name__=="__main__":
    app.run("0.0.0.0", 5500, debug=True)
