import requests

url = 'http://127.0.0.1:5000/json-example'
data = {'language': 'rr44',
        'framework':'qq11',
        'python_version':'ww22',
        'example':'ee33',
        'boolean_test':True
        }
response = requests.post(url, json=data)

print(response.text)
print(int(2) is 2 * True)