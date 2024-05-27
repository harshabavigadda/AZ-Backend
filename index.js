const express = require("express")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ok" , (req,res) => {
    res.send("working");
})

const port  = 4000;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})
