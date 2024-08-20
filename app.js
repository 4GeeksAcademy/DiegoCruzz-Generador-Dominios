const pronombres = ['my', 'your', 'our', 'their'];
const adjetivos = ['happy', 'bright', 'cool', 'smart', 'fast'];
const sujetos = ['dog', 'cat', 'car', 'house', 'book'];

let dominios = [];

for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
        for (let k = 0; k < sujetos.length; k++) {
            let dominio = pronombres[i] + adjetivos[j] + sujetos[k] + '.com';
            dominios.push(dominio);
        }
    }
}

console.log(dominios);
