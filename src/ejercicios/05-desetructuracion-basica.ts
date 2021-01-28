
/*
    ===== Código de TypeScript =====
*/

interface Reproductor { 
    volumen: number; 
    segundo: number;
    cancion: string; 
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    año: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Puedes Contar Conmigo',
    detalles: {
        autor: 'La Oreja de Van Gogh',
        año: 2000
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

/*
console.log( 'El volumen actual es de: ', reproductor.volumen) ;
console.log( 'El segundo actual es: ', reproductor.segundo );
console.log( 'La canción actual es: ', reproductor.cancion );
console.log( 'El autor es: ', reproductor.detalles.autor );
*/

console.log( 'El volumen actual es de: ', volumen) ;
console.log( 'El segundo actual es: ', segundo );
console.log( 'La canción actual es: ', cancion );
console.log( 'El autor es: ', autor );

const pokemon: string[] = ['Pikachu', 'Mewtwo', 'Mew'];

const [ p1, p2, p3] = pokemon;

console.log( 'Pokemon 1: ', p1 );
console.log( 'Pokemon 2: ', p2 );
console.log( 'Pokemon 3: ', p3 );