from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/eval', methods=['POST'])
def eval_data():
    data = request.form['data']
    result = eval(data)
    return 'ok'

if __name__ == '__main__':
    app.run(debug=True)
