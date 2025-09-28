const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../config/db'); // ✅ corregido

// Endpoint para verificar si la API responde
router.get('/ping', (req, res) => {
  res.json({ fechaHora: new Date().toISOString() });
});

// Endpoint para verificar conexión a la base de datos
router.get('/db', async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool.request().query('SELECT SYSDATETIME() AS fechaHora');
    res.json({ fechaHoraDB: result.recordset[0].fechaHora });
  } catch (err) {
    console.error("❌ Error en /db:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;