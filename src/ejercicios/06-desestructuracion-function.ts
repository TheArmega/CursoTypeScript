
/*Exportamos la interfaz para poder utilizarla en otro archivo*/ 
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'iPhone 11 Pro',
    precio: 1000
}

const tab: Producto = {
    desc: 'iPad Pro',
    precio: 2000
}

export function calcularISV( productos: Producto[] ): [number, number] {
    let total = 0;
    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tab ];

const [total, isv] = calcularISV( articulos );
console.log( 'Total: ', total );
console.log( 'ISV: ', isv );