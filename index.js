let express  = require('express');
let app      = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => res.send("Server : OK !"));

io.on('connection', (socket) => {
  
    socket.on('scanCode', function(data){
      io.emit('codeIsScanned', data);   
    });
  
    socket.on('allumeLed', function(data){
      io.emit('allumeLed', data.isAuthorize);   
    });
  
  });
   
  var port = process.env.PORT || 3000;
   
  http.listen(port, function(){
     console.log('listening in http://localhost:' + port);
  });
