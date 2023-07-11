from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/')
def get_headers():
    headers = dict(request.headers)
    return json.dumps(headers, indent=4)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)