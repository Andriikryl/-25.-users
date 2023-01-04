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

app.post("/users", (raq, res) => {
    const id = usersData.length === 0 ? 1 : usersData.at(-1).id + 1;

    console.log(req.body);

    usersData.push({
        id,
        ...req.body,
    });

    
});

app.listen(3000, () => {
    console.log("Server started at port: 3000" )
});