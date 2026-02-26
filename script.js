// Personalize these with your information
const YOUR_NAME = "Your Name"; // Replace with your name
const GIRLFRIEND_NAME = "SHREYA"; // Replace with your girlfriend's name
const RELATIONSHIP_START_DATE = new Date('2024-01-01'); // Replace with when you met

// DOM Elements
const girlfriendName = document.getElementById('girlfriendName');
const loveMessage = document.getElementById('loveMessage');
const reasonsGrid = document.getElementById('reasonsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const loveSong = document.getElementById('loveSong');
const playMusicBtn = document.getElementById('playMusicBtn');
const notesContainer = document.getElementById('notesContainer');
const addNoteBtn = document.getElementById('addNoteBtn');
const loveNote = document.getElementById('loveNote');
const heartsBackground = document.getElementById('heartsBackground');

// Set girlfriend's name
girlfriendName.textContent = GIRLFRIEND_NAME;
loveMessage.textContent = `Every day with you is a blessing, ${GIRLFRIEND_NAME}. You make my world beautiful!`;

// Reasons why I love you
const reasons = [
    { icon: 'fa-smile', text: 'Your beautiful smile' },
    { icon: 'fa-laugh', text: 'Your contagious laugh' },
    { icon: 'fa-heart', text: 'Your kind heart' },
    { icon: 'fa-eye', text: 'The way you look at me' },
    { icon: 'fa-hand-holding-heart', text: 'How caring you are' },
    { icon: 'fa-star', text: 'You make everything better' },
    { icon: 'fa-moon', text: 'Late night talks with you' },
    { icon: 'fa-sun', text: 'Morning texts from you' },
    { icon: 'fa-coffee', text: 'Our coffee dates' },
    { icon: 'fa-film', text: 'Movie nights together' },
    { icon: 'fa-music', text: 'The songs we share' },
    { icon: 'fa-gift', text: 'You are a gift to me' }
];

// Display reasons
function displayReasons() {
    reasonsGrid.innerHTML = '';
    reasons.forEach((reason, index) => {
        const reasonCard = document.createElement('div');
        reasonCard.className = 'reason-card';
        reasonCard.style.animationDelay = `${index * 0.1}s`;
        reasonCard.innerHTML = `
            <i class="fas ${reason.icon}"></i>
            <p>${reason.text}</p>
        `;
        reasonsGrid.appendChild(reasonCard);
    });
}

// Gallery items (replace with your actual photos)
const galleryItems = [
    { emoji: '❤️', caption: 'First Date' },
    { emoji: '💑', caption: 'Our Special Day' },
    { emoji: '🌹', caption: 'Valentine\'s Day' },
    { emoji: '🎂', caption: 'Birthday Celebration' },
    { emoji: '🏖️', caption: 'Beach Day' },
    { emoji: '🌆', caption: 'Sunset Together' },
    { emoji: '🍕', caption: 'Pizza Date' },
    { emoji: '🎄', caption: 'Christmas Together' }
];

// Display gallery
function displayGallery() {
    galleryGrid.innerHTML = '';
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-placeholder">${item.emoji}</div>
            <div class="gallery-caption">${item.caption}</div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Love counter
function updateLoveCounter() {
    const now = new Date();
    const diff = now - RELATIONSHIP_START_DATE;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Floating hearts background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heartsBackground.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Love Quiz
const quizQuestions = [
    {
        question: "What's our favorite thing to do together?",
        options: ["Watch Movies", "Go for Walks", "Cuddle at Home", "All of the Above"],
        correct: 3
    },
    {
        question: "Where did we first meet?",
        options: ["School/College", "Online", "Through Friends", "Work"],
        correct: 2 // Change this to the correct answer
    },
    {
        question: "What's my favorite thing about you?",
        options: ["Your Smile", "Your Personality", "Your Kindness", "Everything"],
        correct: 3
    },
    {
        question: "What's our song?",
        options: ["Perfect - Ed Sheeran", "All of Me - John Legend", "Thinking Out Loud - Ed Sheeran", "A Thousand Years - Christina Perri"],
        correct: 0 // Change this to your actual song
    }
];

let currentQuestion = 0;

function displayQuiz() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('quizQuestion').textContent = question.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index, question.correct);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('quizFeedback').innerHTML = '';
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    
    if (selected === correct) {
        options[selected].classList.add('correct');
        document.getElementById('quizFeedback').innerHTML = '✅ Correct! You know me so well! 💕';
        document.getElementById('quizFeedback').style.color = '#4caf50';
        
        // Move to next question after delay
        setTimeout(() => {
            currentQuestion = (currentQuestion + 1) % quizQuestions.length;
            displayQuiz();
        }, 2000);
    } else {
        options[selected].classList.add('wrong');
        options[correct].classList.add('correct');
        document.getElementById('quizFeedback').innerHTML = '❌ Not quite! But I love you anyway! 💖';
        document.getElementById('quizFeedback').style.color = '#f44336';
        
        // Reset after showing correct answer
        setTimeout(() => {
            options.forEach(opt => {
                opt.classList.remove('wrong', 'correct');
            });
            document.getElementById('quizFeedback').innerHTML = '';
        }, 2000);
    }
}

// Love Notes functionality
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    notesContainer.innerHTML = '';
    
    notes.forEach((note, index) => {
        addNoteToDOM(note, index);
    });
}

function addNoteToDOM(note, index) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note-item';
    noteDiv.innerHTML = `
        <div class="delete-note" onclick="deleteNote(${index})">
            <i class="fas fa-times"></i>
        </div>
        <p>${note.text}</p>
        <div class="note-date">${note.date}</div>
    `;
    notesContainer.appendChild(noteDiv);
}

function saveNote(text) {
    const notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    const note = {
        text: text,
        date: new Date().toLocaleString()
    };
    notes.push(note);
    localStorage.setItem('loveNotes', JSON.stringify(notes));
    addNoteToDOM(note, notes.length - 1);
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('loveNotes', JSON.stringify(notes));
    loadNotes();
}

// Event Listeners
addNoteBtn.addEventListener('click', () => {
    const noteText = loveNote.value.trim();
    if (noteText) {
        saveNote(noteText);
        loveNote.value = '';
    }
});

playMusicBtn.addEventListener('click', () => {
    if (loveSong.paused) {
        loveSong.play();
        playMusicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Our Song';
    } else {
        loveSong.pause();
        playMusicBtn.innerHTML = '<i class="fas fa-play"></i> Play Our Song';
    }
});

// Create floating hearts periodically
setInterval(createFloatingHeart, 500);

// Update counter every second
setInterval(updateLoveCounter, 1000);

// Initialize everything
window.addEventListener('load', () => {
    displayReasons();
    displayGallery();
    displayQuiz();
    loadNotes();
    updateLoveCounter();
    
    // Add romantic messages in console (for her to find)
    console.log('%c❤️ I Love You ❤️', 'color: #ff4d4d; font-size: 20px; font-weight: bold;');
    console.log(`%c${GIRLFRIEND_NAME}, you are amazing!`, 'color: #ff9f9f; font-size: 16px;');
});

// Add some interactive surprises
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'BUTTON') {
        // Create heart on click
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '30px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'floatHeart 2s ease-out forwards';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});

// Make deleteNote function global
window.deleteNote = deleteNote;
