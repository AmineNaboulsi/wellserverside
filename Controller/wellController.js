const getwells = (req, res) => {
    con.query("SELECT * FROM _well", function (err, result, fields) {
        if (err) {
          console.error('Error fetching wells: ' + err);
          res.status(500).send('Database error');
          return;
        }
        res.json(result);
    });
};module.exports = {
  getwells
};