var router = require('express').Router();
var webConfig = require('../config/web.config');

router.get('/', (req, res) => {
    var file = path.join(__dirname, webConfig.PUBLIC_DIR, 'index.html');
    res.sendFile(file);
});

module.exports = router;