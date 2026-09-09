interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles


}

interface Detalles{
    autor:string,
    ano:number


}

const reproductor:Reproductor={
    volumen:90,
    segundo:69,
    cancion:"Silver Sprigs",
    detalles:{
        autor:"Fleetwood Mac",
        ano:1970,
    }

}

console.log("El volumen actual es: ",reproductor.volumen);
console.log("El segundo actual actual es: ",reproductor.segundo);
console.log("La cancion actual actual es: ",reproductor.cancion);
console.log("El autor es: ",reproductor.detalles.autor);
console.log("El año de creacion es: ",reproductor.detalles.ano);

// ahora si el tema de la clase asi se desestructura 

const{volumen,segundo,cancion}=reproductor
console.log(" Este es el segundo ",segundo)


// asi seria con valor asignado en el reproductor 
const{autor,ano}=reproductor.detalles
console.log("Este es el autor otra vez: ",autor)

// lo que le dice a lo que yo entiendo es estas propiedades le pertenecen a ese objeto ,se lo dice a todo el codigo en general 

//asi se hacen arreglos 
const dbz:string[]=['Goku','Vegetta','Trunks','Piccolo']
console.log(dbz[1])

// asi se desestructura
const[p1,,p2]=dbz

console.log(p2)