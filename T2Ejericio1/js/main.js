let userName = 'Juan';
let userSurname = 'Narvaez';

function getMessage(Edad){
    if(Edad >= 18){
        let message = "Bienvenid@" + userName + userSurname;
    } else{
        let message = "Lo sentimos" + userName + userSurname + 'debe der mayor de edad.';
    }
    console.log(message);
}