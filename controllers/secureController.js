const getMessage = (req, res) => {
    res.json({ message: 'This is a secure message!' });
  };
  
  module.exports = { getMessage };
  