const path = require("path");

const express = require("express");
var app = express();
const PORT = 8000;

app.get("", (req, res) => {
	res.sendFile(path.join(__dirname,"public/index.html"));
});

app.listen(PORT, ()=>{
	console.log(`Listening in port ${PORT}`);
});
