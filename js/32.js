// Async / Await

function descargarNuevosClientes () {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los cllientes fueron descargados');
        }, 5000)

    });
}

function descargarUltimosPedidos () {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000)

    });
}

async function app() {
    console.log('app lista');
    try {
       // const resultado = await descargarNuevosClientes();
       // const pedidos = await descargarUltimosPedidos();
       // console.log(clientes);
       // console.log(pedidos);
       const resultado = Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ]);
       console.log(resultado[0]);
       console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea');
