var helpers = require('./helpers');

// var cache = ['apple', 'banana', 'orange', 'eggplant', 'pear', 'peach'];
var cache = [];
var room = '';

module.exports = {

  newGame: (req, res, next) => {
    console.log('POST request for new game: ', req.body);

    /*
    ** POST request to set up the initial game
    ** Request body object { roomname: STRING, playerCount: NUMBER }
    ** Set up the players in cache
    ** Send status code 201
    ** Send roomname and playerCount back to client
    */
    var { roomname, playerCount, username } = req.body;

    if (!roomname || !playerCount) {
      res.status(400).json({ message: 'Invalid request' })
    }

    var cards = [];

    room = roomname;
    for (var i = 1; i <= Number(playerCount); i++) {
      cards.push(`Player ${ i }`);
    }
    cards = helpers.shuffle(cards);
    cache = cards;

    res.status(201).json(req.body);

  },

  joinGame: (req, res, next) => {
    console.log('POST request for joining game: ', req.body);

    /*
    ** POST request to join an existing room
    ** Request body object { roomname: STRING, username: STRING }
    ** Verify if the roomname exists and send status code 200
    */
    var { roomname, username } = req.body;

    if (!username || roomname !== room) {
      res.status(400).json({ message: 'Invalid request' })
    }

    res.status(200).json(Object.assign(req.body));

  },

  revealCard: (req, res, next) => {

    /*
    ** GET request to reveal a player's card
    ** Status code 200
    */

    if (!cache.length) {
      res.status(404).end();
    } else {
      var character = cache.pop();
      res.status(200).json({ character });
    }

  },

}