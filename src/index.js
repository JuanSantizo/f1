const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", routes);

/* const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); */



// Exportamos la app para tests
module.exports = app;

// Solo iniciamos el servidor si se ejecuta directamente
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}