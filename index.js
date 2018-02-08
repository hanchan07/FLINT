const express = require( 'express' );
const app     = express();
const port    = 3000

app.use( express.static( 'public' ) );
app.use( '/', express.static( 'public/html' ) );

app.listen( port );

console.info( 'Server is Listening on Port', port );
