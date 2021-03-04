const express = require('express'); // the server
const helloRouter = require('./routers/hello'); // a route handler

const port = process.env.PORT || 37101;

const app = express(); // spool and serve

app.use(express.json()); // build-in middleware for parsing requests as JSON

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow access from all urls
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Our allowed headers
  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE, OPTIONS'); // Allow these options
  next(); // Middleware calls this at the end to keep things moving
});

app.use(helloRouter); // Our route handler (this is technically, though not conceptually, a middleware as well)

app.listen(port, () => { // Open up the port
  console.log(`Server is up on port: ${port}`);
});
