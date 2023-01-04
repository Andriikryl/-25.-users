const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const usersData = [
    {id: 1, name: "kostia", age: 30}
]

app.get("/users", (request, response) => {
    return response.send(JSON.stringify(usersData));
});

app.listen(3000, () => {
    console.log("Server started at port: 3000" )
});