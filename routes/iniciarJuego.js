var express = require('express');
var router = express.Router();


router.post('/iniciarJuego', function(req, res, next) {
      
      const body = req.body;
      res.json({
            message: 'Juego iniciado ',
            data: body
      });
      
});


module.exports = router;