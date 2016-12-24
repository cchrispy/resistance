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
    console.log(req.body);
    var { roomname, playerCount } = req.body;
    var cards = [];
    console.log(roomname, playerCount);

    room = roomname;
    for (var i = 1; i <= Number(playerCount); i++) {
      cards.push(`Player ${ i }`);
    }
    cards = helpers.shuffle(cards);
    cache = cards;
    console.log(cache);

    res.status(201).json({ cards: cache });

    // cache = ['Tywin Lannister', 'King of the North', 'Arya Stack',
    //          'Mother of Dragons', 'Khal Drogo'];
    // res.status(200).json({
    //   merry: 'CHRISTMAS',
    //   card: cache[Math.floor(Math.random() * cache.length)]
    // });
  },


}