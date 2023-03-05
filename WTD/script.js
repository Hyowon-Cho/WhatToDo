function addTask() {
    // 할 일 추가 요청을 서버에 전송
    let taskContent = document.getElementById('task_content').value;
    fetch('/add_task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'task_content=' + encodeURIComponent(taskContent)
    }).then(response => {
        if (response.ok) {
            // 할 일 추가 성공시 할 일 목록 다시 렌더링
            renderTasks();
        }
    });
    return false;
}

function completeTask(taskIndex) {
    // 완료 요청을 서버에 전송
    fetch('/complete_task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'task_index=' + encodeURIComponent(taskIndex)
    }).then(response => {
        if (response.ok) {
            // 완료 성공시 할 일 목록 다시 렌더링
            renderTasks();
        }
    });
}

function renderTasks() {
    // 할 일 목록 렌더링
    fetch('/').then(response => response.text()).then(html => {
        document.getElementById('tasks').innerHTML = html;
    });
}

// 초기화
window.addEventListener('load', () => {
    renderTasks();
    document.getElementById('add_task_form').addEventListener('submit', addTask);
});

// 위 코드에서는 사용자가 할 일 추가와 완료 요청을 할 때마다 서버와 통신하여 데이터를 업데이트하고, 변경된 데이터를 다시 렌더링한다. 초기화 시점에는 할 일 목록을 렌더링하고, 할 일 추가 폼 제출 시점에는 addTask 함수를 호출하여 서버에 할 일 추가 요청을 전송한다. 체크박스 클릭 시점에는 completeTask 함수를 호출하여 서버에 완료 요청을 전송한다.
// 실행 : python application.py
