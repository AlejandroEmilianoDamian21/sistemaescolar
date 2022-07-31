console.log('Hola')

alert('Bienvenido al Sistema Escolar');

// let apellidoAlumno = prompt('Ingrese el apellido');

// if((nombreAlumno != "") && (apellidoAlumno != "")){
//     alert('Alumno: '+apellidoAlumno+" "+ nombreAlumno );
// }else{
//     alert("Error al ingresar los datos")
// }
let key = 0;

while(key === 0){
    let alumno = prompt('Ingrese el alumno');
    let expresion = prompt ('A donde desea ingresar? 1 - Ver alumno ingresado  2 - Nota del Alumno');
    let parseExpresion = parseInt(expresion);
switch (parseExpresion) {
    case 1:
        alumnoIngresado(alumno);
        let key1 = prompt('¿Desea salir del sistema? Si = 1 , No = 0');
        key = parseInt (key1)
        break;
    case 2:
        notas(alumno);
        key1 = prompt ('¿Desea salir del sistema? Si = 1 , No = 0')
        key = parseInt(key1);
        break;
    default:
        alert('Hola')
        break;
}
}
alert('Gracias por usar el sistema - Vuelva pronto!');

//Saber que alumno fue ingresado
    function alumnoIngresado (alumno) {
        alert('Alumno ingresado es '+ alumno );
    }


    function notas(alumno){
        let materia = prompt('Ingresar la materia');
        alert('Ingresar las notas de la asignatura ' +materia);
        let nota1 = prompt('Nota N°1');
        let parseNota1 = parseInt(nota1);
        let nota2= prompt('Nota N°2');
        let parseNota2 = parseInt(nota2);
        let nota3 = prompt('Nota N°3');
        let parseNota3 = parseInt(nota3);
        alert('Las notas ingresadas son Nota N°1: '+parseNota1+ ' Nota N°2: ' +parseNota2 + ' Nota N°3: ' +parseNota3)
        let promedio = (parseNota1+parseNota2+parseNota3)/3;
        if (promedio >= 6) {
            alert('El alumno '+alumno+ ' APROBO la materia '+materia + ' con un promedio de ' +promedio);
        }else{
            alert('El alumno '+alumno+ ' DESAPROBO la materia '+materia + ' con un promedio de ' +promedio);
        }
    }