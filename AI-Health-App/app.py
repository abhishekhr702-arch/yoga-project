from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").lower()

    reply = "Please consult a certified medical professional for detailed advice."

    # Fever
    if "fever" in user_message:
        reply = "Fever is a temporary increase in body temperature, usually caused by infection."

    # Paracetamol
    elif "paracetamol" in user_message:
        reply = "Paracetamol is used to reduce fever and relieve mild to moderate pain."

    # Ibuprofen
    elif "ibuprofen" in user_message:
        reply = "Ibuprofen helps reduce pain, inflammation, and fever."

    # Headache
    elif "headache" in user_message:
        reply = "Headache can be caused by stress, dehydration, or lack of sleep."

    # Neck pain
    elif "neck" in user_message:
        reply = "For neck pain, try gentle stretching and maintain good posture."

    # Back pain
    elif "back" in user_message:
        reply = "For back pain, rest and light stretching exercises can help."

    # Safe question
    elif "safe" in user_message:
        reply = "Medicine safety depends on dosage and health condition. Always consult a doctor."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)