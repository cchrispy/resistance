module.exports = {

  shuffle: arr => {

    var shuffled = [];

    while(arr.length) {
      var i = Math.floor(Math.random() * arr.length);
      shuffled.push(arr.splice(i, 1)[0]);
    }

    return shuffled;

  }

}