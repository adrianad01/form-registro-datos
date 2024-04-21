const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YTsFDJaMfO0zJakbd9PJx0UEfBfotoU3neTCwpuWuZeCvWChwWKbU6yK65zRaVCw",
  database: "empleados_crud",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const apellidoPaterno = req.body.apellidoPaterno;
  const apellidoMaterno = req.body.apellidoMaterno;
  const edad = req.body.edad;
  const lugarNacimiento = req.body.lugarNacimiento;
  const calle = req.body.calle;
  const colonia = req.body.colonia;
  const codigoPostal = req.body.codigoPostal;
  const municipio = req.body.municipio;
  const estado = req.body.estado;
  const numeroExterior = req.body.numeroExterior;
  const pais = req.body.pais;

  db.query(
    "INSERT INTO empleados(nombre,apellidoPaterno,apellidoMaterno,edad,lugarNacimiento,calle,colonia,codigoPostal,municipio,estado,numeroExterior,pais) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      edad,
      lugarNacimiento,
      calle,
      colonia,
      codigoPostal,
      municipio,
      estado,
      numeroExterior,
      pais,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/empleados", (req, res) => {
  db.query("SELECT * FROM empleados", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const apellidoPaterno = req.body.apellidoPaterno;
  const apellidoMaterno = req.body.apellidoMaterno;
  const edad = req.body.edad;
  const lugarNacimiento = req.body.lugarNacimiento;
  const calle = req.body.calle;
  const colonia = req.body.colonia;
  const codigoPostal = req.body.codigoPostal;
  const municipio = req.body.municipio;
  const estado = req.body.estado;
  const numeroExterior = req.body.numeroExterior;
  const pais = req.body.pais;

  db.query(
    "UPDATE empleados SET nombre =?,apellidoPaterno=?,apellidoMaterno=?,edad=?,lugarNacimiento=?,calle=?,colonia=?,codigoPostal=?,municipio=?,estado=?,numeroExterior=?,pais=? WHERE id=?",
    [
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      edad,
      lugarNacimiento,
      calle,
      colonia,
      codigoPostal,
      municipio,
      estado,
      numeroExterior,
      pais,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


// Configurando el método delete con el query correcto, se eliminarán los campos por ID
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM empleados WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Se configura el puerto 3300, en ese se ejecutará el servidor
app.listen(3300, () => {
  console.log("Corriendo en el puerto 3300");
});
