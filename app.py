from flask import Flask, request
from api import get_recom
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/search_course/', methods=['POST','GET'])
# @cross_origin(origin='*',headers=['Content-Type','Authorization'])
def search():
    # response = flask.jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    print("hi")
    # print(request.args.get("title"))
    title = request.args.get('title')
    # print(request)
    # print(title)
    ans = get_recom(title)
    newans={}
    index = 1
    for i in ans:
        newans[index] = str(i)
        index=index+1
    # return newans
    return {'newans': json.dumps(newans)} #This data goes into your template



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)