const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const numero = document.querySelector('.numero')
const btnAgregarContactos = document.querySelector('.btn-agregar-contactos')

const listadoContactos = document.querySelector('listado-contactos')

const db = window.localStorage

btnAgregarContactos.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        numero: numero.value,
    }
    guardarContacto(db, contactos)
}

cargarContactos(db, listadoContactos)