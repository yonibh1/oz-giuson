const express = require("express");


const cors = require("cors");

const giusonController = require("./controllers-layer/giuson-controller");




const server = express();
server.use(cors());
server.use(express.json());



const BASE_URL="/api/giusonManagement"
server.use(BASE_URL, giusonController);



server.use("*", (req, res) => {
    res.status(404).send(`Route not found ${req.originalUrl}`);
});

server.listen(4000, () => {
    console.log("Listening on 4000");
}).on("error", (err) => {
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else
        console.log("Error: Unknown error");
});





