//Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if(auth) {
        resolve('Usuario autenticado'); //SI el promise se cumple
    } else {
        reject('No se pudo iniciar sesion');//Si no se cumple
    }
});

usuarioAutenticado
.then( (resultado) => console.log(resultado))
.catch( (error) =>  console.log(error)) 
//Existen 3 Promises posibles
//Pending No se ha cumplido rechazado
//Fulfilled Se cumplio
//Rejected no se pudo cumplir