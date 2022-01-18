// Target data 

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

playerLivesCount.textContent = playerLives;

// data generator

const getData = () => [


    {
        imgSrc: 'assets/images/emoji1.png',
        name: 'happy'
    },
    {
        imgSrc: 'assets/images/emoji2.png',
        name: 'annoyed'
    },
    {
        imgSrc: 'assets/images/emoji3.png',
        name: 'confused'
    },
    {
        imgSrc: 'assets/images/emoji4.png',
        name: 'disappointed'
    },
    {
        imgSrc: 'assets/images/emoji5.png',
        name: 'kiss'
    },
    {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thumbs up'
    },
    {
        imgSrc: 'assets/images/emoji7.png',
        name: 'shocked'
    },
    {
        imgSrc: 'assets/images/emoji8.png',
        name: 'thumbs down'
    },
    {
        imgSrc: 'assets/images/emoji1.png',
        name: 'happy'
    },
    {
        imgSrc: 'assets/images/emoji2.png',
        name: 'annoyed'
    },
    {
        imgSrc: 'assets/images/emoji3.png',
        name: 'confused'
    },
    {
        imgSrc: 'assets/images/emoji4.png',
        name: 'disappointed'
    },
    {
        imgSrc: 'assets/images/emoji5.png',
        name: 'kiss'
    },
    {
        imgSrc: 'assets/images/emoji6.png',
        name: 'thumbs up'
    },
    {
        imgSrc: 'assets/images/emoji7.png',
        name: 'shocked'
    },
    {
        imgSrc: 'assets/images/emoji8.png',
        name: 'thumbs down'
    },
];

// Randomize cards

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card generator function

const cardGenerator = () => {
    const cardData = randomize();

    //Generate HTML

    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attach image to cards

        face.src = item.imgSrc;

        //Attach cards to section

        section.appendChild(card);
        card.appendChild(face)
        card.appendChild(back);
    });
};
cardGenerator();