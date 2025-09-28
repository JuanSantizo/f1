const { sql, poolPromise } = require('../config/db');

exports.crearEmpleado = async (req, res) => {
  try {

     const { DPI, Nombre, Email, Salario } = req.body;

    const pool = await poolPromise;
    const result = await pool.request()
      .input("DPI", sql.NVarChar(20), DPI)
      .input("Nombre", sql.NVarChar(200), Nombre)
      .input("Email", sql.NVarChar(200), Email)
      .input("Salario", sql.Decimal(18,2), Salario)
      .execute("sps_EmpleadoInsertar");  
      
    
    res.status(200).json({
      Res: "Ok",
      msg: "",
      data: result.recordset
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.listarEmpleados = async (req, res) => {
    try {
        const pool = await poolPromise;
    const result = await pool.request().execute("spg_EmpleadoListado");

    res.status(200).json({
      Res: "Ok",
      msg: "Empleados listados correctamente",
      data: result.recordset
    });

  } catch (err) {
    res.status(500).json({ Res: "No", msg: err.toString() });
  }
};

/* 
exports.obtenerEmpleadoPorId = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('p_EmpleadoId', sql.Int, req.params.id)
      .execute('RRHH.spg_EmpleadoPorId');
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarEmpleados = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('RRHH.spg_EmpleadoListar');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('p_EmpleadoId', sql.Int, req.params.id)
      .input('p_EmpresaId', sql.Int, req.body.EmpresaId)
      .input('p_Nombres', sql.NVarChar(100), req.body.Nombres)
      .input('p_Apellidos', sql.NVarChar(100), req.body.Apellidos)
      .input('p_FechaNacimiento', sql.Date, req.body.FechaNacimiento)
      .input('p_FechaIngreso', sql.Date, req.body.FechaIngreso)
      .input('p_FechaRetiro', sql.Date, req.body.FechaRetiro)
      .input('p_MotivoRetiro', sql.NVarChar(200), req.body.MotivoRetiro)
      .input('p_Despido', sql.Bit, req.body.Despido)
      .input('p_NIT', sql.NVarChar(20), req.body.NIT)
      .input('p_IGSS', sql.NVarChar(20), req.body.IGSS)
      .input('p_IRTRA', sql.NVarChar(20), req.body.IRTRA)
      .input('p_Email', sql.NVarChar(100), req.body.Email)
      .input('p_DPI', sql.NVarChar(20), req.body.DPI)
      .input('p_Telefono', sql.NVarChar(20), req.body.Telefono)
      .input('p_Celular', sql.NVarChar(20), req.body.Celular)
      .execute('RRHH.sps_EmpleadoActualizar');
    res.json({ mensaje: 'Empleado actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('p_EmpleadoId', sql.Int, req.params.id)
      .input('p_MotivoRetiro', sql.NVarChar(200), req.body.MotivoRetiro)
      .execute('RRHH.sps_EmpleadoEliminar');
    res.json({ mensaje: 'Empleado eliminado (Despido=1, FechaRetiro=GETDATE())' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 */