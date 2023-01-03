module.exports = app => {
    const bingoCards = require('../controllers/bingoCard.controller');
    
    var router = require('express').Router();

    //create a new bingo card
    router.post('/', bingoCards.create);

    //retrieve all bingoCards
    router.get('/', bingoCards.findAll);

    //retrieve all submitted bingoCards
    router.get('/submitted', bingoCards.findOne);

    //retrieve a bingoCard by ID
    router.get('/:id', bingoCards.findOne);

    //update a bingoCard with ID
    router.put('/:id', bingoCards.update);

    //delete a bingoCard with ID
    router.delete('/:id', bingoCards.delete);
    
    //delete all bingoCards
    router.delete('/', bingoCards.deleteAll);

    app.use('/api/bingoCards', router);

    // Main app
    const ctrlProfile = require('../controllers/profile');
     ctrlAuth = require('../controllers/users-auth');
     router.get('/profile', auth, ctrlProfile.profileRead);
     router.post('/register', ctrlAuth.register);
     router.post('/login', ctrlAuth.login);



};
module.exports = router;