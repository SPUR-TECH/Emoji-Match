const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

playerLivesCount.textContent = playerLives;

//Card generator

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
    console.log(cardData);
};

randomize();