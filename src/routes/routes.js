const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../config/db");

const testRoutes = require('./testRoutes');
const empleadoRoutes = require('./empleadoRoutes');

router.use('/test', testRoutes);
router.use('/empleados', require('./empleadoRoutes'));


/* // Obtener todos los empleados
router.get("/empleados", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute("spg_EmpleadoListado");

    res.status(200).json({
      Res: "Ok",
      msg: "",
      data: result.recordset
    });

  } catch (err) {
    res.status(500).json({ Res: "No", msg: err.toString() });
  }
});

// Obtener empleado por DPI
router.get("/empleados/:dpi", async (req, res) => {
  try {
    console.log("Empleado Individual");
    const pool = await poolPromise;
    const result = await pool.request()
      .input("DPI", sql.NVarChar(20), req.params.dpi)
      .execute("spg_EmpleadoIndividual");

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Insertar empleado
router.post("/empleados", async (req, res) => {
  const { DPI, Nombre, Email, Salario } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input("DPI", sql.NVarChar(20), DPI)
      .input("Nombre", sql.NVarChar(200), Nombre)
      .input("Email", sql.NVarChar(200), Email)
      .input("Salario", sql.Decimal(18,2), Salario)
      .execute("sps_EmpleadoInsertar");

    res.status(200).json({
      Res: "Ok",
      msg: "Empleado insertado correctamente",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar empleado
router.put("/empleados/:dpi", async (req, res) => {
  const { Nombre, Email, Salario } = req.body;
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input("DPI", sql.NVarChar(20), req.params.dpi)
      .input("Nombre", sql.NVarChar(200), Nombre)
      .input("Email", sql.NVarChar(200), Email)
      .input("Salario", sql.Decimal(18,2), Salario)
      .execute("sps_EmpleadoActualizar");

    res.json({ message: "Empleado actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar empleado
router.delete("/empleados/:dpi", async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input("DPI", sql.NVarChar(20), req.params.dpi)
      .execute("sps_EmpleadoEliminar");

    res.json({ message: "Empleado eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 */

module.exports = router;
