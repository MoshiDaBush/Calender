const Hapi = require ('hapi');
const host = 'localhost';
const port = 3000;
const sever = Hapo.Server ({
host:host,
port:port
});
//Stat server
const init = async () => {
    await Server.start();
    console.log ("Server up! Port: " + port);
  
}

//about
server.route({
    method:'GET',
    path : '/calculator/about  ',
    handler: function (request, h){

        var data = {
            message :'Gabudi API Calculator'
        };

        return data;
    }
});
 //Start app 
 init ();