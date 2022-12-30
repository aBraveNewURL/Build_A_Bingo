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

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const getRandomIndexValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomBingoNumber = (num = 100) => Math.floor(Math.random() * num.length);
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
    getRandomIndex,
    getRandomIndexValue,
    getRandomBingoNumber,
    getRandomDummyUsers
};