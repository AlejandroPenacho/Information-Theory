const path = require("path");

const express = require("express");
var app = express();
const PORT = 8000;

app.get("", (req, res) => {
	res.sendFile(path.join(__dirname,"public/index.html"));
});

app.get("/favicon.ico", (req, res)=>{
	res.sendFile(path.join(__dirname, "public/favicon.ico"));
})

app.use("", (req, res) => {
	res.sendFile(path.join(__dirname, req.originalUrl));
})

app.listen(PORT, ()=>{
	console.log(`Listening in port ${PORT}`);
});
