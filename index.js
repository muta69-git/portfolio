const express = require("express");
const DB = require("qikdb");

const app = express();
const port = 3000;

const qik = new DB({
    name: "database" 
});

app.use(express.static('public'));

app.get("/test", (res, req) => {
    console.log(req);
});

app.listen(port, () => {
    console.clear();
    console.log(`App listening at port ${port}.`);
});