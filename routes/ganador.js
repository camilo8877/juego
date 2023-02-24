var express = require('express');
var router = express.Router();



router.get('/ganador', function(req, res, next) {

      const { name } = req.query;
      const { id } = req.query;

      if(name && id){
            res.json({
                  name,
                  id,
            })    
          
           
            } else{
                  res.send('No hay paráametro');

      }

});
    
      
      
    
    

    module.exports = router;