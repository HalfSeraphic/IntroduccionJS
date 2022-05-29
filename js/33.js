function obtenerEmpleados() {

    const archivo = '/js/empleados.json';

    fetch(archivo)
        .then( resultado =>  resultado.json())
        .then( datos => console.log(datos))

        const { empleados } = datos;
      //  console.log(empleados);
      empleados.array.forEach(empleado => {
         // console.log(empleado);
          console.log(empleado.id);
          console.log(empleado.nombre);
          console.log(empleado.puesto);
          document.querySelector('.contenido').textContent = empleado.nombre
      });
}
obtenerEmpleados();

async function obtenerEmpleados() {
    const archivo = '/js/empleados.json';

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}