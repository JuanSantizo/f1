const request = require("supertest");
const express = require("express");
const routes = require("../src/routes/routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

describe("Empleado API XXXXXX", () => {
  test("Listar un nuevo empleado", async () => {

    const res = await request(app).get("/api/empleados");
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty('Res');
    expect(res.body).toHaveProperty('msg');
    expect(res.body).toHaveProperty('data');

    expect(res.body.msg).toBe("Empleados listados correctamente");
/*     expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty('Res');
    expect(res.body).toHaveProperty('msg');
    expect(res.body).toHaveProperty('data');    */
  });

/*   test("Insertar Empleado", async () => {
    const res = await request(app)
      .post("/api/empleados")
      .send({
        DPI: "1005",
        Nombre: "Empleado Test",
        Email: "test@email.com",
        Salario: 4000.50
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty('Res');
    expect(res.body).toHaveProperty('msg');
    expect(res.body.msg).toBe("Empleado insertado correctamente");
  }); */


});



