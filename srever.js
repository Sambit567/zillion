let config = require("./config/config");
let server = require("./config/express")();
server.listen(config.port,(err,result)=>{
  if(err){
      console.log(err);
  }
  else{
      console.log("Server Listening on port "+config.port);
  }

});
