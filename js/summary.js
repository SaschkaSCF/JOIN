async function initSummary() {
    await includeHTML();
    await loadUsers();
    await loadNotes();
    showDlDate();
    showGreet();
    loadNotes();
}

async function loadNotes() {
    await downloadFromServer();
    tasksTest = JSON.parse(backend.getItem('allTasks')) || [];
    showCountInBoard();
    showCountInProgress();
}

function showCountInBoard() {
    let countInBoard = document.getElementById('countInBoard');
    countInBoard.innerHTML = tasksTest.length;
}

function showCountInProgress() {
    let countInProgress = document.getElementById('countInProgress');
    let count = 0;
    for (let i = 0; i < tasksTest.length; i++) {
        if (tasksTest[i].split === "in_progress") {
            count++;
        }
    }
    return countInProgress.innerHTML = count;
}


function showDlDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);
    document.getElementById('dlDate').innerHTML = dateString;
}

function showGreet() {
    let greetElem = document.getElementById("greet");
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    if (currentHour < 12) {
        greetElem.innerHTML = "Good morning,";
    } else if (currentHour < 17) {
        greetElem.innerHTML = "Good afternoon,";
    } else {
        greetElem.innerHTML = "Good evening,";
    }

    showCurrentUser();
}

async function showCurrentUser() {
    document.getElementById('username').innerHTML = currentUser['name'];
}