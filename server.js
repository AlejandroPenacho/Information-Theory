const path = require("path");

const express = require("express");
var app = express();
const PORT = 8000;

app.get("", (req, res) => {
	res.sendFile(path.join(__dirname,"public/index.html"));
});

app.use("", (req, res) => {
	res.sendFile(path.join(__dirname, req.originalUrl));
})

app.listen(PORT, ()=>{
	console.log(`Listening in port ${PORT}`);
});
