const app = require('./app');
const port = 3000;

app.listen(port, (err) => {
    if (err) {
      throw new Error(`An error occurred: ${err.message}`);
    }
    console.log(`Server is listening on ${port}`);
});

