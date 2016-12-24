var helpers = require('./helpers');

// var cache = ['apple', 'banana', 'orange', 'eggplant', 'pear', 'peach'];
var cache;
var room = '';


module.exports = {

  newGame: (req, res, next) => {

    /*
    ** POST request to set up the initial game
    ** Request body object { roomname: STRING, playerCount: NUMBER }
    ** Set up the players in cache
    ** Send status code
    */
    var { roomname, playerCount } = req.body;
    var cards = [];

    room = roomname;
    for (var i = 1; i <= Number(playerCount); i++) {
      cards.push(`Player ${ i }`);
    }
    cards = helpers.shuffle(cards);
    cache = cards;

    res.status(201).end();

  },


}