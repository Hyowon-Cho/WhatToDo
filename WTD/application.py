# 1. 플라스크 설치하기: pip install flask

# 2. 플라스크 앱 개발하기

from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# 할 일 목록 저장을 위한 리스트
tasks = []

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html', tasks=tasks)

@app.route('/add_task', methods=['POST'])
def add_task():
    # 클라이언트로부터 전달된 할 일 내용을 받아서 tasks 리스트에 추가
    task_content = request.form['task_content']
    tasks.append({'content': task_content, 'completed': False})
    return jsonify({'success': True})

@app.route('/complete_task', methods=['POST'])
def complete_task():
    # 클라이언트로부터 전달된 할 일 인덱스를 받아서 tasks 리스트에서 해당 할 일의 completed 값을 True로 변경
    task_index = int(request.form['task_index'])
    tasks[task_index]['completed'] = True
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)

# 위 코드에서는 Flask를 이용하여 '/' 경로에 대한 GET 요청을 처리하고, tasks 리스트를 함께 전달하여 index.html 파일을 렌더링한다. '/add_task' 경로에 대한 POST 요청을 처리하여 클라이언트로부터 전달된 할 일 내용을 tasks 리스트에 추가한다. '/complete_task' 경로에 대한 POST 요청을 처리하여 클라이언트로부터 전달된 할 일 인덱스를 찾아서 해당 할 일의 completed 값을 True로 변경한다.
