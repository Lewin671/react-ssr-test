import React from "react";
import ReactDOM from "react-dom";
import data from "./data/recipes.json";
import Menu from "./components/Menu";

// ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));

import express from 'express';
import ReactDomServer, { renderToString } from 'react-dom/server';
import path from 'path';
import { readFile } from "fs";

const htmlTemplate = `
<html>
<header>
<title>SSR Test</title>
<link rel="stylesheet" type="text/css" href="main.css"></header>
<body>
<div id='root'> </div>
</body>
</html>
`;

const app = express();
app.use(express.static("./build"));

app.get("/", (req, res) => {
    const app = ReactDomServer.renderToString(<Menu recipes={data} />);
    console.log(app);
    return res.send(htmlTemplate.replace(`<div id='root'> </div>`, `<div id='root'> ${app} </div>`));
});

app.get("/main.css", (req, res) => {
    const indexFile = path.resolve("./build-server/main.css");
    readFile(indexFile, "utf-8", (err, data) => {
        return res.send(data);
    });
});

app.listen(3000, function () {
    console.log("Server is running on port " + 3000);
});