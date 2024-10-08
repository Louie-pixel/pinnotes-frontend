// Page navigation
function navigateTo(page) {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('register-section').classList.add('hidden');

    switch(page) {
        case 'login':
            document.getElementById('login-section').classList.remove('hidden');
            break;
        case 'register':
            document.getElementById('register-section').classList.remove('hidden');
            break;
        default:
            document.getElementById('home-section').classList.remove('hidden');
            break;
    }
}

// Login logic
function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login logic (can be replaced with API calls)
    if(username === 'user' && password === 'password') {
        alert('Login successful!');
        navigateTo('home');
    } else {
        alert('Invalid credentials');
    }
}

// Register logic
function register(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Simulate registration logic (can be replaced with API calls)
    alert(`User ${username} registered successfully!`);
    navigateTo('login');
}

// Existing popup and note functions remain unchanged
function popup() {
    const popupContainer = document.createElement("div");
    popupContainer.innerHTML = `
    <div id="popupContainer">
        <h1>New Note</h1>
        <textarea id="note-text" placeholder="Enter your note..."></textarea>
        <div id="btn-container">
            <button id="submitBtn" onclick="createNote()">Create Note</button>
            <button id="closeBtn" onclick="closePopup()">Close</button>
        </div>
    </div>`;
    document.body.appendChild(popupContainer);
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    if(popupContainer) {
        popupContainer.remove();
    }
}

function createNote() {
    const noteText = document.getElementById('note-text').value;
    if (noteText.trim() !== '') {
        const note = { id: new Date().getTime(), text: noteText };
        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        existingNotes.push(note);
        localStorage.setItem('notes', JSON.stringify(existingNotes));
        closePopup();
        displayNotes();
    }
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${note.text}</span>
        <div id="noteBtns-container">
            <button id="editBtn" onclick="editNote(${note.id})"><i class="fa-solid fa-pen"></i></button>
            <button id="deleteBtn" onclick="deleteNote(${note.id})"><i class="fa-solid fa-trash"></i></button>
        </div>`;
        notesList.appendChild(listItem);
    });
}

displayNotes();
