const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('halo dek')
})

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const alat_tangkap = require("./routes/alat_tangkap.js");
app.use("/api/alat_tangkap", alat_tangkap);

const dpi = require("./routes/dpi.js");
app.use("/api/dpi", dpi);

const pemilik = require("./routes/pemilik.js");
app.use("/api/pemilik", pemilik);

app.listen(port, () => {
    console.log(`http:://localhost:${port}`)
})

