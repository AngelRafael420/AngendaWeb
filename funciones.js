const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href ='/'

}

const cargarContactos = (db, contacto) =>{
    let claves = Object.keys(db)

    for(claces of claves){
        let contacto = JSON.parse(db, contactos(claves))
        crearContacto(parentNone, contacto, db)
    }
}

const crearContacto = (parentNone, contacto, db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    iconoBorrar.innerHTML ='delete'
    
    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.localtion.href = '/'
    }

    divContacto.classList.add('contactos')
    divContacto.classList.add('material-symbols-outlined')

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(iconoBorrar)

    parentNone.appendChild(divContacto)

}
