from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

def check_namespace_access(namespace, service_account):
    try:
        cmd = f"kubectl auth can-i get pods --as={service_account} -n {namespace}"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return "green" if "yes" in result.stdout.lower() else "red"
    except Exception as e:
        return "orange"

@app.route('/api/v1/verify', methods=['POST'])
def verify():
    data = request.json
    results = {
        "namespace_access": check_namespace_access(data['namespace'], data['serviceAccount']),
        # Add other check functions here
    }
    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)