const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
    default:
        console.log('Aun no has pagado')
        break;
}