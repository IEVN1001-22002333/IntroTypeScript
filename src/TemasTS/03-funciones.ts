

function sumar(x:number,y:number,z:number):number {
let num1=6
let num=4
let res=num1+num
console.log('Resultado'+res)
return x+y - z


}


let resultado = sumar(12,8,10)
console.log(resultado)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void      //es una funcion que no va a regresar nada por ahora , en void se le explica el tipo de dato

}

const nuevaMascota:Mascotas={
    nombre:"etanol",
    edad:5,
    raza:"Zarihueya",
    vacunado:true,
    mostrar(){
        console.log(`la edad de ${this.nombre}es ${this.edad}` )
    }

}

function mostrarMascota(mascota:Mascotas,x:number):void{
    mascota.edad+=x
    console.log(mascota)

}

mostrarMascota(nuevaMascota,3)