module.exports = {
  new: (req, res, next) => {
    res.status(200).json({ merry: 'CHRISTMAS' });
  }
}