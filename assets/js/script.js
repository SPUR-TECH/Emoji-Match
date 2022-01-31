// Target data 

var section = document.querySelector('section');
var playerLivesCount = document.querySelector('span');
var playerLives = 6;

playerLivesCount.textContent = playerLives;

// Generate an array

function getData() {
    return [{
        imgSrc: 'assets/images/emoji1.png',
        name: 'fart-emoji',
        alt: 'fart-emoji'
    }, {
        imgSrc: 'assets/images/emoji2.png',
        name: 'happy-emoji',
        alt: 'happy-emoji'
    }, {
        imgSrc: 'assets/images/emoji3.png',
        name: 'ok-emoji',
        alt: 'ok-emoji'
    }, {
        imgSrc: 'assets/images/emoji4.png',
        name: 'thumb-emoji',
        alt: 'thumb-emoji'
    }, {
        imgSrc: 'assets/images/emoji5.png',
        name: 'confused-emoji',
        alt: 'confused-emoji'
    }, {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thinking-emoji',
        alt: 'thinking-emoji'
    }, {
        imgSrc: 'assets/images/emoji7.png',
        name: 'smile-emoji',
        alt: 'smile-emoji'
    }, {
        imgSrc: 'assets/images/emoji8.png',
        name: 'laugh-emoji',
        alt: 'laugh-emoji'
    }, {
        imgSrc: 'assets/images/emoji1.png',
        name: 'fart-emoji',
        alt: 'fart-emoji'
    }, {
        imgSrc: 'assets/images/emoji2.png',
        name: 'happy-emoji',
        alt: 'happy-emoji'
    }, {
        imgSrc: 'assets/images/emoji3.png',
        name: 'ok-emoji',
        alt: 'ok-emoji'
    }, {
        imgSrc: 'assets/images/emoji4.png',
        name: 'thumb-emoji',
        alt: 'thumb-emoji'
    }, {
        imgSrc: 'assets/images/emoji5.png',
        name: 'confused-emoji',
        alt: 'confused-emoji'
    }, {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thinking-emoji',
        alt: 'thinking-emoji'
    }, {
        imgSrc: 'assets/images/emoji7.png',
        name: 'smile-emoji',
        alt: 'smile-emoji'
    }, {
        imgSrc: 'assets/images/emoji8.png',
        name: 'laugh-emoji',
        alt: 'laugh-emoji'
    }];
};

// Randomize cards

function randomize() {
    var cardData = getData();
    cardData.sort(function () {
        return Math.random() - 0.5;
    });
    return cardData;
};

//Card generator function

function cardGenerator() {
    var cardData = randomize();

    //Generate HTML

    cardData.forEach(function (item) {
        var card = document.createElement('div');
        var face = document.createElement('img');
        var back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attach image to cards
        // Set Attributes

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        face.setAttribute('alt', item.name);

        //Attach cards to section

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', function (e) {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};

// Check cards

function checkCards(e) {
    console.log(e);
    var clickedCard = e.target;
    clickedCard.classList.add('flipped');
    var flippedCards = document.querySelectorAll('.flipped');
    var toggleCard = document.querySelectorAll('.toggleCard');
    console.log(flippedCards);

    // logic 

    // Turn 2 cards then do a check

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            // stop flip if correct
            flippedCards.forEach(function (card) {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
        } else {
            // Turn back if wrong
            console.log('wrong');
            flippedCards.forEach(function (card) {
                card.classList.remove('flipped');
                setTimeout(function () {
                    return card.classList.remove('toggleCard');
                }, 1000);
            });

            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                setTimeout(function () {
                    return restart(':( Better luck next time');
                }, 2000);
            }
        }
    }

    // Check if you win

    if (toggleCard.length === 16) {
        setTimeout(function () {
            return restart(':) Wahoo you did it!!!!');
        }, 2000);
    }
};

//Restart

function restart(text) {
    var cardData = randomize();
    var faces = document.querySelectorAll('.face');
    var cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach(function (item, index) {
        cards[index].classList.remove('toggleCard');

        setTimeout(function () {
            cards[index].style.pointerEvents = 'all';
            // Randomize
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000);
    });

    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(function () {
        return window.alert(text);
    }, 100);
};

cardGenerator();