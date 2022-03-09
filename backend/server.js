const { application } = require("express")
const express = require("express")

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT, () => console.log('server running on port 8000'))