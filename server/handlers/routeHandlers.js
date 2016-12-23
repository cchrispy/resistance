// var cache = ['apple', 'banana', 'orange', 'eggplant', 'pear', 'peach'];
var cache = [];
var roomName = '';


module.exports = {

  newGame: (req, res, next) => {
    cache = ['Tywin Lannister', 'King of the North', 'Arya Stack',
             'Mother of Dragons', 'Khal Drogo'];
    res.status(200).json({
      merry: 'CHRISTMAS',
      card: cache[Math.floor(Math.random() * cache.length)]
    });
  },


}