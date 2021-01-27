
/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string;
    pais: string; 
    ciudad: string
}
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}


const superHeroe: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30, 
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + 
        this.direccion.pais;
    }
}

const direccionCadena = superHeroe.mostrarDireccion();
console.log( direccionCadena );