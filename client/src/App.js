// Importación de estilos y bibliotecas
import "./App.css"; // Estilos locales
import { useState } from "react"; // Importación del hook useState de React
import Axios from "axios"; // Importación de Axios para manejar solicitudes HTTP
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap
import Swal from "sweetalert2";

function App() {
  // Datos Personales
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [edad, setEdad] = useState("");
  const [lugarNacimiento, setLugarNacimiento] = useState("");
  //Dirección
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [numeroExterior, setNumeroExterior] = useState("");
  const [pais, setPais] = useState("");
  const [id, setId] = useState("");
  const [editar, setEditar] = useState(false);
  const [empleadosList, setEmpleados] = useState([]);

  //Arrow Function para agregar un empleado por el método POST
  const add = () => {
    Axios.post("http://localhost:3300/create", {
      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      edad: edad,
      lugarNacimiento: lugarNacimiento,
      calle: calle,
      colonia: colonia,
      codigoPostal: codigoPostal,
      municipio: municipio,
      estado: estado,
      numeroExterior: numeroExterior,
      pais: pais,
    }).then(() => {
      getEmpleados();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro Éxitoso</strong>",
        html:
          "<i>El empleado <strong>" +
          nombre +
          " </strong> ha sido registrado con éxito</i>",
        icon: "success",
        timer: 3000,
        background: "#32373D",
        color: "#ffffff",
        confirmButtonColor: "#007CBA",
      });
    });
  };

  const update = () => {
    Axios.put("http://localhost:3300/update", {
      id: id,
      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      edad: edad,
      lugarNacimiento: lugarNacimiento,
      calle: calle,
      colonia: colonia,
      codigoPostal: codigoPostal,
      municipio: municipio,
      estado: estado,
      numeroExterior: numeroExterior,
      pais: pais,
    }).then(() => {
      getEmpleados();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización Éxitosa</strong>",
        html:
          "<i>Se han actualizado los datos de <strong>" +
          nombre +
          " </strong> con éxito</i>",
        icon: "success",
        timer: 3000,
        background: "#32373D",
        color: "#ffffff",
        confirmButtonColor: "#007CBA",
      });
    });
  };

  const deleteEmpleado = (val) => {
    Swal.fire({
      title: "Confirmar Eliminado",
      html: "<i>¿Estás seguro que deseas eliminar el registro?</i>",
      icon: "warning",
      iconColor: "#d33",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      background: "#32373D",
      color: "#ffffff",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.delete(`http://localhost:3300/delete/${val.id}`).then(() => {
            getEmpleados();
            limpiarCampos();
          });
          Swal.fire({
            title: "Eliminado!",
            text: `El registro de ${val.nombre} ha sido eliminado`,
            icon: "success",
            background: "#32373D",
            color: "#ffffff",
          });
        }
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logró eliminar el empleado",
          footer:
            JSON.parse(JSON.stringify(error)).message === "Network Error"
              ? "Error de Servidor, intente más tarde"
              : JSON.parse(JSON.stringify(error)).message,
          background: "#32373D",
          color: "#ffffff",
          confirmButtonColor: "#007CBA",
        });
      });
  };

  const limpiarCampos = () => {
    setNombre("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setEdad("");
    setLugarNacimiento("");
    setCalle("");
    setColonia("");
    setCodigoPostal("");
    setMunicipio("");
    setEstado("");
    setNumeroExterior("");
    setPais("");
    setId("");
    setEditar(false);
  };

  const editarEmpleado = (val) => {
    setEditar(true);

    setNombre(val.nombre);
    setApellidoPaterno(val.apellidoPaterno);
    setApellidoMaterno(val.apellidoMaterno);
    setEdad(val.edad);
    setLugarNacimiento(val.lugarNacimiento);
    setCalle(val.calle);
    setColonia(val.colonia);
    setCodigoPostal(val.codigoPostal);
    setMunicipio(val.municipio);
    setEstado(val.estado);
    setNumeroExterior(val.numeroExterior);
    setPais(val.pais);
    setId(val.id);
  };

  //Función para que me arroje la lista de empleados por el método GET
  const getEmpleados = () => {
    Axios.get("http://localhost:3300/empleados").then((response) => {
      setEmpleados(response.data);
    });
  };

  //Renderizado del componente
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">Registro de Datos</div>
        <div className="card-body">
          <h2>Datos Personales</h2>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre(s):{" "}
            </span>
            <input
              type="text"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa tu(s) nombre(s)"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellido Paterno:{" "}
            </span>
            <input
              type="text"
              value={apellidoPaterno}
              onChange={(event) => {
                setApellidoPaterno(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa tu apellido paterno"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellido Materno:{" "}
            </span>
            <input
              type="text"
              value={apellidoMaterno}
              onChange={(event) => {
                setApellidoMaterno(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa tu apellido materno"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Edad:{" "}
            </span>
            <input
              type="number"
              value={edad}
              onChange={(event) => {
                setEdad(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa tu edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Lugar de Nacimiento:{" "}
            </span>
            <input
              type="text"
              value={lugarNacimiento}
              onChange={(event) => {
                setLugarNacimiento(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa tu lugar de nacimiento (Municipio-Delegación, Estado)"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Calle:{" "}
            </span>
            <input
              type="text"
              value={calle}
              onChange={(event) => {
                setCalle(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el nombre de la calle de tu domicilio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Colonia:{" "}
            </span>
            <input
              type="text"
              value={colonia}
              onChange={(event) => {
                setColonia(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa la colonia de tu domicilio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Código Postal:{" "}
            </span>
            <input
              type="number"
              value={codigoPostal}
              onChange={(event) => {
                setCodigoPostal(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el código postal de tu domicilio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Municipio:{" "}
            </span>
            <input
              type="text"
              value={municipio}
              onChange={(event) => {
                setMunicipio(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el municipio donde resides."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Estado:{" "}
            </span>
            <input
              type="text"
              value={estado}
              onChange={(event) => {
                setEstado(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el estado en el que resides"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Número Exterior:{" "}
            </span>
            <input
              type="number"
              value={numeroExterior}
              onChange={(event) => {
                setNumeroExterior(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el número exterior de tu domicilio"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Pais:{" "}
            </span>
            <input
              type="text"
              value={pais}
              onChange={(event) => {
                setPais(event.target.value);
              }}
              className="form-control"
              placeholder="Ingresa el pais en el que resides"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {editar === true ? (
            <div>
              <button className="btn btn-warning m-2" onClick={update}>
                Actualizar
              </button>
              <button className="btn btn-info m-2" onClick={limpiarCampos}>
                Cancelar
              </button>
            </div>
          ) : (
            <button className="btn btn-success m-2" onClick={add}>
              Registrar
            </button>
          )}

          <button className="btn btn-success m-2" onClick={getEmpleados}>
            Mostrar Registros
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Número de Registro</th>
            <th scope="col">Nombre(s)</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Edad</th>
            <th scope="col">Lugar de Nacimiento</th>
            <th scope="col">Calle</th>
            <th scope="col">Colonia</th>
            <th scope="col">Código Postal</th>
            <th scope="col">Municipio</th>
            <th scope="col">Estado</th>
            <th scope="col">Número Exterior</th>
            <th scope="col">País</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleadosList.map((val, key) => {
            return (
              <tr key={val.id}>
                <th scope="row">{val.id}</th>
                <td>{val.nombre}</td>
                <td>{val.apellidoPaterno}</td>
                <td>{val.apellidoMaterno}</td>
                <td>{val.edad}</td>
                <td>{val.lugarNacimiento}</td>
                <td>{val.calle}</td>
                <td>{val.colonia}</td>
                <td>{val.codigoPostal}</td>
                <td>{val.municipio}</td>
                <td>{val.estado}</td>
                <td>{val.numeroExterior}</td>
                <td>{val.pais}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editarEmpleado(val);
                      }}
                      className="btn-edit btn-success m-1"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn-delete btn-danger m-1"
                      onClick={() => {
                        deleteEmpleado(val);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
