from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Simulated database (replace with a real database in production)
features = [
    {
        "id": 1,
        "icon": "🌐",
        "title": "Global Reach",
        "description": "Connect with customers worldwide through our powerful platform."
    },
    {
        "id": 2,
        "icon": "⚡",
        "title": "Lightning Fast",
        "description": "Experience blazing fast performance with our optimized infrastructure."
    },
    {
        "id": 3,
        "icon": "🛡️",
        "title": "Secure by Default",
        "description": "Your data is protected with enterprise-grade security measures."
    }
]

stats = [
    {
        "id": 1,
        "number": "10M+",
        "label": "Users Worldwide"
    },
    {
        "id": 2,
        "number": "99.9%",
        "label": "Uptime Guarantee"
    },
    {
        "id": 3,
        "number": "24/7",
        "label": "Customer Support"
    }
]

# Contact form submissions storage
contact_submissions = []

@app.route('/api/features', methods=['GET'])
def get_features():
    return jsonify(features)

@app.route('/api/stats', methods=['GET'])
def get_stats():
    return jsonify(stats)

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    if not data or not data.get('email'):
        return jsonify({"error": "Email is required"}), 400
    
    submission = {
        "email": data.get('email'),
        "name": data.get('name', ''),
        "message": data.get('message', '')
    }
    contact_submissions.append(submission)
    return jsonify({"message": "Contact form submitted successfully"}), 201

@app.route('/api/newsletter', methods=['POST'])
def subscribe_newsletter():
    data = request.json
    if not data or not data.get('email'):
        return jsonify({"error": "Email is required"}), 400
    
    # In a real application, you would save this to a database
    return jsonify({"message": "Successfully subscribed to newsletter"}), 201

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "Server is running"}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)