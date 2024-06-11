if (document.getElementById('questionnaire')) {
    const questions = document.querySelectorAll('.question');
    let currentQuestion = 0;

    function showNextQuestion() {
        if (currentQuestion < questions.length - 1) {
            questions[currentQuestion].classList.add('hidden');
            currentQuestion++;
            questions[currentQuestion].classList.remove('hidden');
        } else {
            showPopup();
        }
    }

    function showPopup() {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('visible');
        }, 10);
        document.getElementById('questionnaire').classList.add('hidden');
    }

    document.querySelectorAll('.yes-button').forEach(button => {
        button.addEventListener('click', showNextQuestion);
    });

    document.querySelectorAll('.no-button').forEach(button => {
        button.addEventListener('mouseover', function() {
            let x = Math.random() * (window.innerWidth - button.clientWidth);
            let y = Math.random() * (window.innerHeight - button.clientHeight);
            button.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    document.getElementById('proceed-button').addEventListener('click', function() {
        document.getElementById('password-box').classList.remove('hidden');
    });

    document.getElementById('password-submit').addEventListener('click', function() {
        const password = document.getElementById('password-input').value;
        if (password === '1024') {
            window.location.href = 'invite.html';
        } else {
            alert('Incorrect password baby');
        }
    });
}

if (document.getElementById('check-letter-button')) {
    document.getElementById('check-letter-button').addEventListener('click', function() {
        const letter = document.getElementById('letter');
        const button = document.getElementById('check-letter-button');
        letter.classList.remove('hidden');
        button.classList.add('hidden');
        setTimeout(() => {
            letter.classList.add('visible');
        }, 10);
    });

    document.getElementById('yes-button').addEventListener('click', function() {
        const letter = document.getElementById('letter');
        const popup = document.getElementById('popup');
        const emojiRain = document.getElementById('emoji-rain');
        const music = document.getElementById('background-music');

        letter.classList.remove('visible');
        setTimeout(() => {
            letter.classList.add('hidden');
        }, 1000); 

        setTimeout(() => {
            popup.classList.remove('hidden');
            popup.classList.add('visible');
            startEmojiRain();
            music.play();
        }, 1100);
    });

    document.getElementById('no-button').addEventListener('mouseover', function() {
        let button = document.getElementById('no-button');
        let x = Math.random() * (window.innerWidth - button.clientWidth);
        let y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.transform = `translate(${x}px, ${y}px)`;
    });

    function startEmojiRain() {
        const emojiRain = document.getElementById('emoji-rain');
        emojiRain.classList.remove('hidden');
        setInterval(() => {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = '🎀';
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3 to 5 seconds
            emojiRain.appendChild(emoji);

            
            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }, 100); 
    }
}
