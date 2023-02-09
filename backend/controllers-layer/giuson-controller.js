const express = require("express");
const giusonLogic = require("../business-logic-layer/giusonLogic");






const router = express.Router();


router.get("/", async (request, response) => {
    try {
        const candidates = await giusonLogic.getAllCandidatesAsync();
        response.send(candidates);
    }
    catch (error) {
        response.status(500).send({ error: "server error" });
    }
});


router.get("/languages",
    async (request, response) => {
        try {
            const alllanguages = await giusonLogic.getAllLanguagesAsync();
            response.send(alllanguages);
        }
        catch (error) {
            response.status(500).send(error);
        }
    });



module.exports = router;
