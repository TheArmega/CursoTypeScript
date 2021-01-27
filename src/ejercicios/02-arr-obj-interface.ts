
/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash', 'Counter', 'Healing', 100];
let habilidades2: (boolean | string | number)[] = [];

/*Esta es la mejor forma*/
let habilidades3: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

 const personaje: Personaje = {
     nombre: 'Armega',
     hp: 100,
     habilidades: ['Bash', 'Counter', 'Healing']
 }

 personaje.puebloNatal = 'Pueblo Paleta';

 console.table( personaje );
