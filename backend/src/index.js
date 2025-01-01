const express = require("express");
const userRoutes = require("./routes/usersRoute");
const pemainRoutes = require("./routes/pemainRoute");
const pelatihRoutes = require("./routes/pelatihRoute");
const wasitRoutes = require("./routes/wasitRoute");

const app = express();

// Middleware
app.use(express.json());

// Rute API
app.use("/api/users", userRoutes);
app.use("/api/pemain", pemainRoutes);
app.use("/api/pelatih", pelatihRoutes);
app.use("/api/wasit", wasitRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server berjalan di port : ${PORT}`));
