
/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, base: number, otroNumero?: number): number {
    return numero * base;
}

const resultado = sumar(7, 5);

const resultado2 = multiplicar(12, 2);

console.log( resultado );
console.log( resultado2 );

interface Personaje2 {
    nombre: string;
    hp: number; 
    mostrarHP: () => void;
}

function curar(personaje: Personaje2, curarX: number): void {
    personaje.hp += curarX;
}

const nuevoPersonaje: Personaje2 = {
    nombre: 'Armega',
    hp: 100,
    mostrarHP() {
        console.log('Puntos de vida: ', this.hp);
    }
}

curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarHP();