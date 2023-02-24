var express = require('express');
var router = express.Router();


router.post('/gamer', function(req, res, next) {
      
      const body = req.body;
      res.json({
            message: 'Jugador creado ',
            data: body
      });
      
     
});


module.exports = router;