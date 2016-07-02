from flask import Flask, render_template, jsonify, request, url_for, send_from_directory

app = Flask(__name__)
app.debug = True


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        request_data = request.get_json()

        apt = request_data['apt']
        dpt = request_data['dpt']
        date = request_data['date']

        prediction = run_algo(apt, dpt, date)

        return jsonify(**prediction)


def run_algo(apt, dpt, algo):
    return {
        'Accuracy': 0.99,
        'Delay': 1
    }


app.run()
