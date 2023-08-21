import requests

url = 'http://127.0.0.1:5000/api/items'
data = {'name': 'New Item'}
response = requests.post(url, json=data)

print(response.json())
