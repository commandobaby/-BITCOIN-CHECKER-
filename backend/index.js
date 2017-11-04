
var express = require('express');
var app = express();
var port = process.env.PORT || 5555;



/*   MLAB  */

var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://root:root@ds145283.mlab.com:45283/pcmongallet");
var User = require("./models/user");


/*       CRONJOB QUI AFFICHE LE PRIX DES BITCOIN TOUTES LES MINUTES             */
/* LE CRONJOB EST UNE TACHE QUI SE FAIT AUTOMATIQUEMENT EN FONCTION DUN TEMPS DONNEES*/


app.post('/register', function (req, res) {

      var tmp_user = new User({
                uuid: "dd",
                activate: "0",
            })

      console.log(req)
    
    User.find({uuid : tmp_user.uuid }, function(err, res) 
        {
              if (res.length == 0) 
              {
                  res.type = message  
                  tmp_user.save(function (err, data) {
                if (err) console.log("echec de la sauvegarde" + err);
                else console.log('Saved ', data ); });
              }
                else 
                    return 
        }) 

});

// start the server
app.listen(port);