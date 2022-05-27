//This

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion()