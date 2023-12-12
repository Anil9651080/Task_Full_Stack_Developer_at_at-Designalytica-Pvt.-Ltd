const express = require("express");
const bodyParser = require("body-parser");
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/calculate", (req, res) => {
    const { number1, number2 } = req.body;
    const result = number1 + number2;

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet([[number1, number2, result]]);
    xlsx.utils.book_append_sheet(wb, ws, "Sheet 1");

    const fileName = `result_${Date.now()}.xlsx`;
    const filePath = path.join(__dirname, fileName);

    xlsx.writeFile(wb, filePath);

    res.json({ result, fileName });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
