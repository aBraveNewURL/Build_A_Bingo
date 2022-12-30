const usernameList = [
    "bret",
    "antonette",
    "samantha",
    "karianne",
    "camren",
    "leo",
    "ann.skiles",
    "max_nienow",
    "delphine",
    "moriah.stanton"
];

const emailList = [
    "b12@place.com",
    "amos123@place.com",
    "redbluegreen@place.com",
    "othername@place.com",
    "sam11@place.com",
    "23theo@place.com",
    "harold@place.com",
    "max_fun@place.com",
    "thisperson@place.com",
    "stan@place.com"
    
];

const bingoList = [
    {
        "name": "Desserts",
        "list": [
            "Ice cream",
            "Donuts",
            "Milkshakes",
            "Cake",
            "Pie",
            "Flan",
            "Mousse",
            "Creme brulee",
            "Pot de creme",
            "Pudding",
            "Cookies",
            "Brownies",
            "Brookies",
            "Pazookies",
            "Creme fraiche",
            "Bananas foster",
            "Strawberries and cream",
            "Fruit compote",
            "Baked apples",
            "Ganache",
            "Chocolate fondue",
            "Chocolate drizzle",
            "Chocolate nuts",
            "Chocolate chips"
        ]
    },
    {
        "name": "TV Shows",
        "list": [
            "Castlevania",
            "Gravity Falls",
            "The Last Kingdom",
            "Vikings",
            "Vinland Saga",
            "Kakegurui",
            "3%",
            "She-Ra",
            "Wednesday",
            "Andor",
            "The Mandalorian",
            "Ozark",
            "Dahmer",
            "The Boys",
            "Demon Slayer",
            "Hunter x Hunter",
            "Samurai Seven",
            "All My Children",
            "Married with Children",
            "Cheers",
            "Friends",
            "Fawlty Towers",
            "The IT Crowd",
            "The Great British Bake-Off"
        ]
    },
    {
        "name": "Video Games",
        "list": [
            "Elden Ring",
            "Nuclear Throne",
            "Human Resource Machine",
            "The Outer Wilds",
            "Dota 2",
            "League of Legends",
            "Call of Duty",
            "Overwatch",
            "Jump King",
            "Dark Souls",
            "Dead Cells",
            "Bloodstained: Ritual of the Night",
            "Dead by Daylight",
            "Alien: Isolation",
            "Spelunky",
            "Samurai Gunn",
            "Demons with Shotguns",
            "Nine Parchments",
            "Magicka",
            "Terraria",
            "Minecraft",
            "Rim World",
            "Tales of Maj'Eyal",
            "Cult of the Lamb"
        ]
    }
];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandomIndexValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomBingoNumber = (num = 100) => Math.floor(Math.random() * num);

const getRandomBingoNumberList = () => {
    const name = 'Random Number BingoList';
    const list = [];

    while ( list.length < 24 ) {
        const num = getRandomBingoNumber();
        list.push(num);
    };

    const bingoList = {
        name: name,
        list: list
    };

    return bingoList;
}

const getDummyBingoNumberCard = () => {
    const col = ['a', 'b', 'c', 'd', 'e'];
    const row = ['1', '2', '3', '4', '5'];


}

const getRandomDummyUsers = (usernameArr, emailArr, count) => {
    const uniqueAccountLimit = Math.min(usernameArr.length, emailArr.length);
    const dummyUsers = [];

    if (count > uniqueAccountLimit) {
        console.log(`Unable to make ${count} unique accounts. Only ${uniqueAccountLimit} accounts will be made.`);
        count = uniqueAccountLimit;
    }

    for (let i = 0; i < count; i++) {
        // console.log('usernameArr:', usernameArr);
        // console.log('emailArr:', emailArr);
        const username = usernameArr.splice([getRandomIndex(usernameArr)], 1);
        const email = emailArr.splice([getRandomIndex(emailArr)], 1);

        const user = {
            username: username[0],
            email: email[0],
            password: 'password'
        };

        dummyUsers.push(user)
    }
    return dummyUsers;
};


module.exports = {
    usernameList,
    emailList,
    bingoList,
    getRandomIndex,
    getRandomIndexValue,
    getRandomBingoNumber,
    getRandomBingoNumberList,
    getRandomDummyUsers
};