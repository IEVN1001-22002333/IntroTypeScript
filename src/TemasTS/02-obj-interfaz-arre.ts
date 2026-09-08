interface Alumno{
    nombre:string,
    apellido:string,
    edad: number,
    email:string,
    nota?:number,  //Con ? haces que sea opcional el campo

}

const alumno:Alumno={
    nombre:'Antonio',
    apellido:"Garcia",
    edad: 22,
    email:'anagas2059@gmail.com',


}

console.table(alumno)

let mascotas=['perro','Loro','gato','Señor wilson']
console.table(mascotas)
mascotas[2]='Lucas'
console.table(mascotas)
mascotas.push('canela')
console.table(mascotas)
//arreglos con otros tipos de datos
let tem:(number|string)[]=[]
tem.push(11)
tem.push('once')
console.table(tem)

