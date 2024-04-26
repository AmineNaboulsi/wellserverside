const getpayment = (req, res) => {
    con.query("SELECT * FROM _payment", function (err, result, fields) {
        if (err) {
          console.error('Error fetching users: ' + err);
          res.status(500).send('Database error');
          return;
        }
        res.json(result);
    });
};

module.exports = {
    getpayment
};
