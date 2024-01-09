const containsItems = [
    {
        id: 0,
        head: 'Металлическая дверь',
        image: 'assets/images/1.png',
        chance: 5,
        price: 5312,
        rarityColor: 'rgb(255, 221, 89)'
    },
    {
        id: 1,
        head: 'Маска наказания',
        image: 'assets/images/2.png',
        chance: 5,
        price: 3864,
        rarityColor: 'rgb(255, 221, 89)'
    },
    {
        id: 2,
        head: 'Чужой Реликтовый Пистолет-пулемет',
        image: 'assets/images/3.png',
        chance: 5,
        price: 1903,
        rarityColor: 'rgb(255, 221, 89)'
    },
    {
        id: 3,
        head: 'Улыбашка',
        image: 'assets/images/4.png',
        chance: 5,
        price: 1355,
        rarityColor: 'rgb(235, 65, 42)'
    },
    {
        id: 4,
        head: 'Спальник ужаса',
        image: 'assets/images/5.png',
        chance: 5,
        price: 1072,
        rarityColor: 'rgb(255, 57, 247)'
    },
    {
        id: 5,
        head: 'Калаш фантом',
        image: 'assets/images/6.png',
        chance: 25,
        price: 29,
        rarityColor: 'rgb(97, 167, 255)'
    },
    {
        id: 6,
        head: 'Костяной нож Пайтити',
        image: 'assets/images/7.png',
        chance: 50,
        price: 5,
        rarityColor: 'rgb(97, 167, 255)'
    }
];

const users = {
    Vlaqikk: {
        id: 0,
        login: 'Vlaqikk',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
    Test1: {
        id: 1,
        login: 'Test1',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
    Test2: {
        id: 2,
        login: 'Test2',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
    Test3: {
        id: 3,
        login: 'Test3',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
    Test4: {
        id: 4,
        login: 'Test4',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
    Test5: {
        id: 5,
        login: 'Test5',
        password: '1111',
        avatar: 'https://nztcdn.com/files/f1ad270beb08c5191d155505232034c6b8d515ea2399f0338eb03b62fac94385.webp',
        balance: 50000,
    },
}

let currentUser;