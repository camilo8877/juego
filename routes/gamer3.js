var express = require('express');
var router = express.Router();

router.get('/gamer3', function(req, res, next) {

      
      const { name } = req.query;
      const { id } = req.query;
      const { inProgress } = req.query;
    
      
      if(name && id && inProgress){
            res.json({
                  name,
                  id,
                  inProgress
            })
           
            } else{
                  res.send('No hay paráametros');
      }
    
    });

    module.exports = router;