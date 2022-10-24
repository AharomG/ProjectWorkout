'use strict'

let app = require('./app'),
    port = app.get('port'),
    server = app.listen(port, () => console.log(`App started in port: ${port}`));