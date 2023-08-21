from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data
data = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
    {"id": 3, "name": "Item 3"}
]
next_id = 4

@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify(data)

@app.route('/api/items', methods=['POST'])
def add_item():
    global next_id
    new_item = {"id": next_id, "name": request.json.get("name")}
    next_id += 1
    data.append(new_item)
    return jsonify({"message": "Item added successfully"})

if __name__ == '__main__':
    app.run(debug=True)
