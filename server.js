const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from Azure App Service!</h1>
        <p>This application is running on Azure.</p>
    `);
});

app.get("/students", (req, res) => {
    res.json([
        { name: "Student 1", course: "Python" },
        { name: "Student 2", course: "Java" }
    ]);
});

app.get("/teachers", (req, res) => {
    res.json([
        { name: "John", course: "ADSE" },
        { name: "James", course: "ACCP" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});