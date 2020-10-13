"use strict";
const PORT = process.env.PORT || 3000;

const app = require("./server/app");

app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));
