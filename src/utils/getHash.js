// Obtiene el hash actual y lo devuelve en minúsculas, el slice elimina el primer caracter que es el #, el split separa el string en un array y el [1] obtiene el segundo elemento del array, el cual es el id del personaje
const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;