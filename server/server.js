var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');

var webConfig = require('./config/web.config');
var routerConfig = require('./config/router.config');
var dbConnector = require('./app/util/db-connector');

class Server {

    constructor() {
        this.app = express();
    }

    setupMiddlewares() {
        
        this.app.use(express.static(path.join(__dirname, webConfig.PUBLIC_DIR)));

        this.app.use(cors());
        this.app.use(morgan('tiny'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    setupRouters() {
        
        for(let r in routerConfig) {
            console.log(r + ':' + routerConfig[r]);
            this.app.use(r, require(routerConfig[r]));
        }

        this.app.use('*', (req, res) => {
            res.status(404).end('Error 404: Not found');
        });
    }

    initialize(cb) {
        this.setupMiddlewares();
        this.setupRouters();
        dbConnector(webConfig.DB_CONNECTION, cb);
    }

    start(port) {
        this.initialize((err) => {
            
            if(err) {
                return console.log(err);
            }

            this.startListening(port);
        });
    }

    startListening(port = webConfig.PORT) {
        this.app.listen(port, (err)=> {
            if(err) {
                return console.log(err);
            }

            console.log(`Server listening at port ${webConfig.PORT}`);
        })
    }
}

module.exports = Server;