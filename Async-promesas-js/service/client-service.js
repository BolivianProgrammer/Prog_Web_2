const crear_nueva_fila = (nombre, email) => {
    const fila = document.createElement("tr");
    const contenido = `<td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>` ;
    fila.innerHTML = contenido;
    return fila;
};

const table = document.querySelector("[data-table]");
const obtenerClientes = () => {
    const promesa = new Promise((resolve, reject) => {
        const peticion = new XMLHttpRequest();
        peticion.open("GET", "http://localhost:3001/perfil");
        peticion.send();
        peticion.onload = () => {
            const respuesta = JSON.parse(peticion.response);
            if (peticion.status >= 400) {
                reject("Ocurrio un error");
            } else {
                resolve(respuesta);
            }
        };
    });
    return promesa;
};

obtenerClientes()
    .then((data) => {
        data.forEach((perfil) => {
            const nuevaFila = crear_nueva_fila(perfil.nombre, perfil.email);
            table.appendChild(nuevaFila);
        });
    })
    .catch((error) => alert("Ocurrio un error"));